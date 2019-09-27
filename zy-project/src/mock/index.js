import Mock from "mockjs"
import data from "./home-swipe.json"
import title from "./homeTeb"
Mock.mock("/swipe",{data:data.data});
Mock.mock("/tab",{data:title});

