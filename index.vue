 <el-form :inline="true" :model="payForm" :rules="rules" ref="payForm" class="only-search-form " size="mini" label-width="113px">
        <el-form-item label="学员姓名 :" prop="customerName">
          <el-input v-model="payForm.customerName" clearable ></el-input>
        </el-form-item>
        <el-form-item label="联系方式 :" prop="customerPhone">
          <el-input v-model="payForm.customerPhone" clearable></el-input>
        </el-form-item>
        <el-form-item label="订单类型 :" prop="signTypeId">
          <cascader-order-type-all  v-model="payForm.signTypeId" :is-get-data="true"></cascader-order-type-all>
        </el-form-item>
        <el-form-item label="订单状态 :" prop="payStatus">
          <order-status v-model="payForm.payStatus" :is-get-data="true"></order-status>
        </el-form-item>

        <el-form-item label="订单编号 :" prop="financialNumber">
          <el-input v-model="payForm.financialNumber" clearable></el-input>
        </el-form-item>
        <el-form-item label="下单时间 :" prop="createTime" class="form-item-big">
          <el-date-picker v-model="createTime" :default-time="['00:00:00', '23:59:59']" type="datetimerange" range-separator="~" start-placeholder="开始" end-placeholder="结束" value-format="yyyy-MM-dd HH:mm:ss">
          </el-date-picker>
        </el-form-item>
        <el-form-item>

        </el-form-item>
      </el-form>