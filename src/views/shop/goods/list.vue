<template>
  <div class="bg-white px-3" style="margin: -20px; margin-top: -1rem">
    <el-tabs v-model="tabIndex" @tab-click="handleClick">
      <el-tab-pane :label="tab.name" :key="tabI" v-for="(tab, tabI) in tabbars">
        <ButtonSearch
          ref="buttonSearch"
          placeholder="要搜索的商品名称"
          @search="searchEvent"
        >
          <!-- 左边 -->
          <template #left>
            <el-button type="success" size="mini">发布商品</el-button>
            <el-button type="warning" size="mini">恢复商品</el-button>
            <el-button type="danger" size="mini">批量删除</el-button>
            <el-button size="mini">上架</el-button>
            <el-button size="mini">下架</el-button>
            <el-button size="mini">推荐</el-button>
          </template>
          <!--高级搜索表单 -->
          <template #form>
            <el-form inline ref="form" :model="form" label-width="80px">
              <el-form-item label="商品名称" class="mb-0">
                <el-input
                  v-model="form.name"
                  placeholder="商品名称"
                  size="mini"
                ></el-input>
              </el-form-item>
              <el-form-item label="商品编码" class="mb-0">
                <el-input
                  v-model="form.code"
                  placeholder="商品编码"
                  size="mini"
                ></el-input>
              </el-form-item>
              <el-form-item label="商品类型" class="mb-0">
                <el-select
                  v-model="form.type"
                  size="mini"
                  placeholder="请输入商品类型"
                >
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="商品分类" class="mb-0">
                <el-input
                  v-model="form.category"
                  placeholder="请输入商品名称"
                  size="mini"
                ></el-input>
              </el-form-item>
              <el-form-item class="mb-0">
                <el-button type="info" size="mini" @click="searchEvent"
                  >搜索</el-button
                >
                <el-button size="mini" @click="clearSearch"
                  >清空搜索条件</el-button
                >
              </el-form-item>
            </el-form>
          </template>
        </ButtonSearch>
        <!-- 商品列表 -->
        <!--
				 商品
					图片 http://static.yoshop.xany6.com/2018071718294208f086786.jpg
					名称 荣耀 V10全网通 标配版 4GB+64GB 魅丽红
					时间	 2019-07-17 18:34:14
				 	分类  手机
				 商品类型（普通商品）
				 实际销量（20）
				 商品排序（100）
				 商品状态（上架）
				 总库存（200）
				 价格(元)（1000.00）
				 -->
        <el-table
          ref="multipleTable"
          :data="tableData"
          style="width: 100%"
          @selection-change="handleSelectionChange"
          border class="mt-3">
          <el-table-column type="selection" width="45" align="center"></el-table-column>
          <el-table-column label="商品" width="380">
            <template slot-scope="scope">
              <div class="media">
               <img class="mr-3" style="width: 60px;height: 60px;" :src="scope.row.cover">
               <div class="media-body">
                 <p class="mt-0">{{scope.row.title}}</p>
                 <p class="mb-0">分类:{{scope.row.category}}</p>
                 <p class="mb-0">时间:{{scope.row.create_time}}</p>
               </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="type" label="商品类型" align="center">
          </el-table-column>
          <el-table-column prop="sale_count" label="实际销量" align="center">
          </el-table-column>
          <el-table-column prop="order" label="商品排序" align="center">
          </el-table-column>
          <el-table-column prop="status" label="商品状态" align="center">
            <template>
               <el-button type="success" size="mini" plain>上架</el-button>
            </template>
          </el-table-column>
          <el-table-column align="center" prop="stock" label="总库存">
          </el-table-column>
          <el-table-column align="center" prop="pprice" label="价格(元)">
          </el-table-column>
          <el-table-column
					prop="id"
					align="center"
					label="操作">
				  </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ButtonSearch from "../../../components/common/button-search.vue";
export default {
  data() {
    return {
      tabIndex: 0,
      tabbars: [
        { name: "审核中" },
        { name: "出售中" },
        { name: "已下架" },
        { name: "库存预警" },
        { name: "回收站" },
      ],
      superSearch: false,
      form: {
        name: "",
        code: "",
        type: "",
        category: "",
      },
      tableData: [
        {
          id: 1,
          title: "荣耀 V10全网通 标配版 4GB+64GB 魅丽红",
          cover: "http://static.yoshop.xany6.com/2018071718294208f086786.jpg",
          create_time: "2019-07-17 18:34:14",
          category: "手机",
          type: "普通商品",
          sale_count: 20,
          order: 100,
          status: 1,
          stock: 200,
          pprice: 1000,
          ischeck: 1,
          // 0未审核，1通过，2不通过
        },
      ],
      multipleSelection: [],
    };
  },
  components: {
    ButtonSearch,
  },
  methods: {
    // 加载数据
    handleClick(tab, event) {
      console.log(tab.index);
    },
    //搜索事件
    searchEvent(e = false) {
      // 简单搜索
      if (typeof e === "string") {
        return console.log("简单搜索", e);
      }
      // 高级搜索
      console.log("搜索事件");
    },
    //清空筛选条件
    clearSearch() {
      this.form = {
        name: "",
        code: "",
        type: "",
        category: "",
      };
      this.$refs.buttonSearch[this.tabIndex].closeSuperSearch()
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
};
</script>

<style>
</style>
