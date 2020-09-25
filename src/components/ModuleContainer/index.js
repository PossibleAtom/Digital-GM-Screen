import React from 'react';
import StyledModuleContainer, {ModuleContent, ModuleTitle}from './style'

const ModuleContainer = ({
    children,
}) => (
     <StyledModuleContainer>
         <ModuleTitle>Module Name</ModuleTitle>
         <ModuleContent>
             Hello World
             {children && children}
         </ModuleContent>
     </StyledModuleContainer>
);

export default ModuleContainer;
