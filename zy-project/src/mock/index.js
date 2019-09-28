import Mock from "mockjs"
import data from "./home-swipe.json"
import title from "./homeTeb"
import gridData from "./homeData"
import sidebar from "./category.json"
Mock.mock("/swipe",{data:data.data});
Mock.mock("/tab",{data:title});
Mock.mock("/grid",{data:gridData});
Mock.mock("/sideData",{data:sidebar});

