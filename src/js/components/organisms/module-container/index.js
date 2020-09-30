import React from 'react';
import StyledModuleContainer, {ModuleContent, ModuleTitle}from './style'

const ModuleContainer = ({
    moduleName,
    children,
}) => (
     <StyledModuleContainer>
         <ModuleTitle>{moduleName || 'Module Name'}</ModuleTitle>
         <ModuleContent>
             {children && children}
         </ModuleContent>
     </StyledModuleContainer>
);

export default ModuleContainer;
