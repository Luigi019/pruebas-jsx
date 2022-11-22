import React from "react";
import MyProvider from "../../application/provider";
import LogIn from "../../components/login";
import ShowState from "../../components/showState/ShowState";

const HomeProvider = _ => <MyProvider>
    <LogIn></LogIn>
    <ShowState></ShowState>
</MyProvider>;
export default HomeProvider;