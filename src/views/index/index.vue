<template>
	<div>

		<!-- 数据统计 -->
		<el-row :gutter="20">
			<el-col :span="6" v-for="(item,index) in counts"
			:key="index">
				<el-card class="box-card" shadow="hover">
					<div class="d-flex align-items-center">
						<i
						:class="[item.icon,item.color]"
						class="h4 mb-0 text-white text-center mr-3"
						style="width: 40px;height: 40px;line-height: 40px;">
						</i>
						<div>
							<h4 class="mb-1">{{item.num}}</h4>
							<small class="text-muted">{{item.desc}}</small>
						</div>
					</div>
				</el-card>
			</el-col>
		</el-row>
    <!-- 店铺、订单提示 | 统计图 -->
		<el-row :gutter="20" class="mt-3">
			<!-- 店铺、订单提示 -->
			<el-col :span="12" class="d-flex flex-column" style="height: 370px;">
				<el-card class="box-card mb-auto" shadow="never">
					<div slot="header" class="clearfix">
						<span>店铺及商品提示</span>
						<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
					</div>
					<div class="row">
						<div class="col-3">
							<button class="btn btn-light w-100">
								<h4 class="mb-1">64</h4>
								<small class="text-muted">出售中</small>
							</button>
						</div>
						<div class="col-3">
							<button class="btn btn-light w-100">
								<h4 class="mb-1">64</h4>
								<small class="text-muted">出售中</small>
							</button>
						</div>
						<div class="col-3">
							<button class="btn btn-light w-100">
								<h4 class="mb-1">64</h4>
								<small class="text-muted">出售中</small>
							</button>
						</div>
						<div class="col-3">
							<button class="btn btn-light w-100">
								<h4 class="mb-1">64</h4>
								<small class="text-muted">出售中</small>
							</button>
						</div>
					</div>
				</el-card>
				<el-card class="box-card" shadow="never">
					<div slot="header" class="clearfix">
						<span>交易提示</span>
						<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
					</div>
					<div class="row">
						<div class="col-2">
							<button class="btn btn-light w-100">
								<h4 class="mb-1">64</h4>
								<small class="text-muted">出售中</small>
							</button>
						</div>
						<div class="col-2">
							<button class="btn btn-light w-100">
								<h4 class="mb-1">64</h4>
								<small class="text-muted">出售中</small>
							</button>
						</div>
						<div class="col-2">
							<button class="btn btn-light w-100">
								<h4 class="mb-1">64</h4>
								<small class="text-muted">出售中</small>
							</button>
						</div>
						<div class="col-2">
							<button class="btn btn-light w-100">
								<h4 class="mb-1">64</h4>
								<small class="text-muted">出售中</small>
							</button>
						</div>
						<div class="col-2">
							<button class="btn btn-light w-100">
								<h4 class="mb-1">64</h4>
								<small class="text-muted">出售中</small>
							</button>
						</div>
						<div class="col-2">
							<button class="btn btn-light w-100">
								<h4 class="mb-1">64</h4>
								<small class="text-muted">出售中</small>
							</button>
						</div>
					</div>
				</el-card>
			</el-col>
			<!-- 统计图 -->
			<el-col :span="12">
				<el-card class="box-card" style="height: 370px;"
				shadow="never">
					<div slot="header" class="clearfix">
						<span>卡片名称</span>
						<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
					</div>
					<div class="text item"></div>
				</el-card>
			</el-col>
		</el-row>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				counts: [
					{ icon:"el-icon-user-solid",desc:"关注人数(个)",num:"30",color:"bg-primary" },
					{ icon:"el-icon-s-finance",desc:"订单总数(笔)",num:"120",color:"bg-success" },
					{ icon:"el-icon-s-order",desc:"今日订单总金额(元)",num:"4183.80" ,color:"bg-danger"},
					{ icon:"el-icon-s-data",desc:"本月销量(笔)",num:"100",color:"bg-warning" },
				]
			}
		},
	}
</script>

<style>
</style>
