import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// RTK Query是一个强大的数据获取和缓存工具

// 调用createApi()来创建Api对象
const studentApi = createApi({
  //Api的标识，不能和其他的Api或reducer重复
  reducerPath: "studentApi",

  // baseQuery指定查询的基础信息，发送请求使用的工具
  // RTKQ提供了fetchBaseQuery作为查询工具，它对fetch进行了简单的封装
  baseQuery: fetchBaseQuery({ baseUrl: "http://geek.itheima.net/v1_0" }),

  // Api对象封装了一类功能，比如学生的增删改查，我们会统一封装到一个对象中。
  // 一类功能中的每一个具体功能我们可以称它是一个端点。endpoints用来对请求中的端点进行配置。
  endpoints: (build) => {
    return {
      // build是请求的构建器，通过build来设置请求的相关信息
      getStudent: build.query({
        query: () => {
          // 用来指定请求子路径，这个子路径将会和baseUrl拼接为一个完整的请求路径
          // http://geek.itheima.net/v1_0/channels
          return "channels";
        },
      }),

      // 查询：build.query({})
      // 增删改：build.mutation({})
      // getStudentById: build.query()
      // updateStudent:build.mutation()
    };
  },
});

// Api对象创建后, 对象中会根据各种方法自动的生成对应的钩子函数
// 通过这些构子函数，可以来向服务器发送请求
// 钩子函数的命名规则getstudents-- > useGetstudentsQuery
export const { useGetStudentQuery } = studentApi;

export default studentApi;
