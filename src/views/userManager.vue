<template>
  <el-row class="container" id="userManager">
    <el-col :span="24" class="main">
      <section class="content-container">
        <div class="grid-content bg-purple-light">

          <!-- 标题 -->
          <el-col :span="24" class="breadcrumb-container">
            <strong class="title">用户管理</strong>
          </el-col>

          <!-- 列表 -->
          <el-col :span="24" class="content-wrapper">
            <el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
              <el-table-column type="selection" width="55">
              </el-table-column>
              <el-table-column type="index" width="60">
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="120" sortable>
              </el-table-column>
              <el-table-column prop="sex" label="性别" width="100" :formatter="formatSex" sortable>
              </el-table-column>
              <el-table-column prop="age" label="年龄" width="100" sortable>
              </el-table-column>
              <el-table-column prop="birth" label="生日" width="120" sortable>
              </el-table-column>
              <el-table-column prop="addr" label="地址" min-width="180" sortable>
              </el-table-column>
              <el-table-column label="操作" width="150">
                <template scope="scope">
                  <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                  <el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-col>

          <!--工具条-->
          <el-col :span="24" class="toolbar">
            <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">
            </el-pagination>
          </el-col>

        </div>
      </section>
    </el-col>
  </el-row>
</template>

<script>
  import reqData from "@/model/reqData" 

  export default {
    data() {
      return {
        users: [],
        total: 0,
        listLoading: false
      }
    },

    methods: {
      //获取用户列表
      getUsers() {
        // let para = {
        //   page: this.page,
        //   name: this.filters.name
        // };
        this.listLoading = true;
        reqData.req({
          apiName: 'userManagerList'
        }).then((res) => {
          console.log(res)
          this.total = res.data.total;
          this.users = res.data.user;
          this.listLoading = false;
        });
      },

      selsChange: function (sels) {
        this.sels = sels;
      },

      //性别显示转换
      formatSex: function (row, column) {
        return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
      },

      handleCurrentChange(val) {
        this.page = val;
        this.getUsers();
      }
    },

    mounted() {
      this.getUsers()
    }
  }
</script>

<style lang="scss" scoped>
  #userManager{
    .breadcrumb-container{
      padding: 5px 5px;
      border-bottom: 1px solid #ccc;
    }
  }
</style>
