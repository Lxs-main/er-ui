<template>
  <div id="app">
    <check-person :empList="empList" :deptList="deptList" :rootDept="rootDept" :isCheckOne="isCheckOne" @saveData="getResultCheck"></check-person>
    <label>aaaaaaaaaaaaaa</label>
  </div>
</template>

<script>

export default {
  data(){
    return {
      //是否单选
      isCheckOne: false,
      rootDept: '四川眉州监狱',
      deptList: [
        {
          id: 40,
          name: "研发一部",
          parentId: 37,
          seq: 2,
        },
        {
          id: 41,
          name: "研发二部",
          parentId: 37,
          seq: 4,
        },
        {
          id: 43,
          name: "市场",
          parentId: 0,
          seq: 6,
        },
        {
          id: 44,
          name: "销售",
          parentId: 0,
          seq: 4,
        },
        {
          id: 45,
          name: "财务",
          parentId: 0,
          seq: 5,
        },
        {
          id: 46,
          name: "研发三部",
          parentId: 37,
          seq: 1,
        },
        {
          id: 47,
          name: "研发四部",
          parentId: 37,
          seq: 3,
        },
        {
          id: 57,
          name: "研发",
          parentId: 0,
          seq: 5,
        },
        {
          id: 58,
          name: "研发一部",
          parentId: 57,
          seq: 1,
        },
        {
          id: 59,
          name: "测试",
          parentId: 0,
          seq: 5,
        },
        {
          id: 60,
          name: "测试一部",
          parentId: 59,
          seq: 1,
        },
        {
          id: 61,
          name: "测试二部",
          parentId: 59,
          seq: 2,
        },
        {
          id: 62,
          name: "研发二部",
          parentId: 57,
          seq: 2,
        },
      ],
      empList: [
        {
          ID: 1,
          EmployeeName: "吴亦凡",
          DepartId: 44,
        },
        {
          ID: 2,
          EmployeeName: "鹿晗",
          DepartId: 45,
        },
        {
          ID: 3,
          EmployeeName: "孙红雷",
          DepartId: 44,
        },
        {
          ID: 4,
          EmployeeName: "周杰伦",
          DepartId: 45,
        },
        {
          ID: 5,
          EmployeeName: "张国荣",
          DepartId: 45,
        },
        {
          ID: 6,
          EmployeeName: "陈百强",
          DepartId: 45,
        },
        {
          ID: 7,
          EmployeeName: "谭咏麟",
          DepartId: 45,
        },
        {
          ID: 8,
          EmployeeName: "谷村新司",
          DepartId: 45,
        },
        {
          ID: 9,
          EmployeeName: "中岛美雪",
          DepartId: 45,
        },
        {
          ID: 10,
          EmployeeName: "周润发",
          DepartId: 45,
        },
        {
          ID: 14,
          EmployeeName: "周慧敏",
          DepartId: 58,
        },
        {
          ID: 13,
          EmployeeName: "张学友",
          DepartId: 58,
        },
      ],
    }
  },
  methods: {
    getResultCheck(arr){
      debugger;
    }
  }
}
</script>

<style lang="scss">

</style>
