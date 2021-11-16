import React from "react";
import {CheckListContainer,Text} from "./CheckList.styles";
import ContainerCheckList from "../container/ContainerCheckList"

const CheckList = () => {
    return (
        <CheckListContainer>
            <Text>Check List</Text>
            <div>
                <ContainerCheckList/>
            </div>
            
        </CheckListContainer>
    );
};

export default CheckList;