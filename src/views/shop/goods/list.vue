<template>
	<div class="bg-white px-3" style="margin: -20px;margin-top: -1rem;">

		<el-tabs v-model="tabIndex" @tab-click="handleClick">
		    <el-tab-pane :label="tab.name" :key="tabI"
			v-for="(tab,tabI) in tabbars">


				<div class="d-flex align-items-center">
					<!-- 左边 -->
					<el-button type="success" size="mini">发布商品</el-button>
					<el-button type="danger" size="mini">批量删除</el-button>
					<!-- 右边 -->
					<div class="ml-auto" v-show="!superSearch">
						<el-input v-model="form.keyword" placeholder="要搜索的商品名称" size="mini" style="width:150px;" class="mr-2"></el-input>
						<el-button type="info" size="mini">搜索</el-button>
						<el-button size="mini"
						@click="superSearch = true">高级搜索</el-button>
					</div>

				</div>
				<el-card class="box-card bg-light my-3" v-show="superSearch">
					<div slot="header" class="clearfix" style="margin: -10px;">
						<span>高级搜索</span>
						<el-button style="float: right; padding: 3px 0"
						type="text" @click="superSearch = false"
						>收起</el-button>
					</div>
					表单
				</el-card>


			</el-tab-pane>
		</el-tabs>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				tabIndex: 0,
				tabbars:[
					{ name:"审核中"},
					{ name:"出售中" },
					{ name:"已下架"},
					{ name:"库存预警" },
					{ name:"回收站" },
				],
				superSearch:false,
				form:{
					keyword:"",
				}
			}
		},
		methods: {
			// 加载数据
			handleClick(tab,event) {
				console.log(tab.index);
			}
		},
	}
</script>

<style>
</style>
