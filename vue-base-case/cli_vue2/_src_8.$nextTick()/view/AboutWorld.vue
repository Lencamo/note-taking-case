<template>
  <div class="home">
    <!-- 表格 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix header-box">
        <span>文章分类</span>
      </div>
      <!-- 使用element-ui的table组件 -->
      <el-table :data="cateList" style="width: 100%" border stripe>
        <el-table-column label="序号" type="index" width="100"> </el-table-column>
        <el-table-column label="分类名称" prop="cate_name"></el-table-column>
        <el-table-column label="分类别名" prop="cate_alias"></el-table-column>
        <el-table-column align="操作">
          <template slot-scope="scope">
            <el-button type="primary" @click="updateCateBtnFn(scope)">修改</el-button>
            <el-button type="danger" @click="addCateBtnFn()">新增</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 弹窗 -->
    <el-dialog :title="isEdit ? '编辑文章分类' : '新增文章分类'" :visible.sync="dialogVisible" @close="handleClose">
      <el-form :model="formData" ref="dialogFrom" label-width="80px">
        <!-- 如果利用ref使用了resetFields()方法，那么和存在:rules一样，每一个el-form-item都要加上prop -->
        <el-form-item label="分类名称" prop="name">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="分类别名" prop="alias">
          <el-input v-model="formData.alias"></el-input>
        </el-form-item>
        <el-form-item align="right">
          <el-button @click="resetForm('dialogFrom')">重置</el-button>
          <el-button @click="cancelFn">取 消</el-button>
          <el-button type="primary" @click="confirmFn">确 定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'AboutWorld',
  data: function () {
    return {
      dialogVisible: false,
      // 表格数据
      cateList: [
        {
          cate_name: '家具',
          cate_alias: '家居装饰'
        },
        {
          cate_name: '服装',
          cate_alias: '时尚潮流'
        }
      ],
      // 弹窗表单数据
      formData: {
        name: '',
        alias: ''
      },
      isEdit: false
      // rules:{} // 演示案例就不做表单校验了
    }
  },
  methods: {
    // 表格：修改按钮
    updateCateBtnFn(item) {
      this.isEdit = true
      this.dialogVisible = true

      // 数据✍回显（弹窗显示后）
      this.$nextTick(() => {
        const { cate_name, cate_alias } = item.row
        this.formData.name = cate_name
        this.formData.alias = cate_alias
      })
    },
    // 表格：新增按钮
    addCateBtnFn() {
      this.isEdit = false
      this.dialogVisible = true
    },
    // 弹窗表单：确认按钮
    confirmFn() {
      // this.$refs.dialogFrom.validate(async (valid) => {   // 演示案例就没有做表单校验
      //   if(valid){
      //     this.$refs['dialogFrom'].clearValidate()

      if (this.isEdit) {
        // 对用户输入的数据进行……
        this.dialogVisible = false
      } else {
        // 对用户输入的数据进行……
        this.dialogVisible = false
      }

      //   }
      // })
    },
    // 弹窗表单：重置按钮（可复用）
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    // 弹窗表单：取消按钮（可复用）
    cancelFn() {
      this.dialogVisible = false
    },
    // 关闭弹窗（可复用）
    handleClose() {
      this.$refs['dialogFrom'].resetFields() // ✨ 下回又是一个崭新的Dialog
    }
  }
}
</script>