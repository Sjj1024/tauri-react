import requests from "@/utils/request";

export default {
  searchShare(
    keyWord: string = "DOC",
    lable: string = "+label:documentation",
    state: string = "+state:closed",
    author: string = "",
    pageSize: number = 35,
    pageNum: number = 1
  ) {
    // 在Sjj1024/DataHub中搜索关闭的和分享的内容，并且是标题里面包含关键字的
    return requests(
      `/search/issues?q=${
        keyWord + lable + state + author
      }+in:title+repo:Sjj1024/doc-data&per_page=${pageSize}&page=${pageNum}`,
      {
        method: "get",
      }
    );
  },
  getNotes(
    keyWord: string = "DOC",
    lable: string = "+label:documentation",
    pageSize: number = 35,
    pageNum: number = 1
  ) {
    // 在作者/DocHub中获取笔记列表
    return requests(
      `/search/issues?q=${keyWord + lable}+in:title+repo:${localStorage.getItem(
        "loginName"
      )!}/Dochub&per_page=${pageSize}&page=${pageNum}`,
      {
        method: "get",
      }
    );
  },
  uploadFile(filePath: string, body: any) {
    return requests(
      `/repos/${localStorage.getItem(
        "loginName"
      )}/Dochub/contents/root/${filePath}`,
      {
        method: "put",
        body: body,
      }
    );
  },
  creatIssue(body: any) {
    return requests(
      `/repos/${localStorage.getItem("loginName")}/DocHub/issues`,
      {
        method: "post",
        body: body,
      }
    );
  },
  delFile(filePath: string, body: any) {
    return requests(
      `/repos/${localStorage.getItem("loginName")}/DocHub/contents/${filePath}`,
      {
        method: "DELETE",
        body: body,
      }
    );
  },
  updateNote(issue_number: string, body: any) {
    return requests(
      `/repos/${localStorage.getItem(
        "loginName"
      )}/DocHub/issues/${issue_number}`,
      {
        method: "PATCH",
        body: body,
      }
    );
  },
  // 更新笔记内容
  updateFile(filePath: string, body: any) {
    return requests(
      `/repos/${localStorage.getItem("loginName")}/DocHub/contents/${filePath}`,
      {
        method: "PUT",
        body: body,
      }
    );
  },
  getNoteText(fileName: string) {
    return requests(
      `repos/${localStorage.getItem(
        "loginName"
      )}/DocHub/contents/root/${fileName}`,
      {
        method: "get",
      }
    );
  },
};
