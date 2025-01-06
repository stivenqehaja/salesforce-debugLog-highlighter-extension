function enhanceLogs() {
  console.log('Enhancing logs...');
  
  let body = document.body;
  let desktopDiv = body.querySelector('div.desktop');
  console.log('desktopDiv found:', desktopDiv); // Debug
  let viewportDiv = desktopDiv?.querySelector('div.viewport');
  console.log('viewportDiv found:', viewportDiv); // Debug
  let layoutContentSection = viewportDiv?.querySelector('section.layoutContent');
  console.log('layoutContentSection found:', layoutContentSection); // Debug
  let workspaceManagerDiv = layoutContentSection?.querySelector('div.workspaceManager');
  console.log('workspaceManagerDiv found:', workspaceManagerDiv); // Debug
  let oneConsoleTabsetDiv = workspaceManagerDiv?.querySelector('div.oneConsoleTabset');
  console.log('oneConsoleTabsetDiv found:', oneConsoleTabsetDiv); // Debug
  let tablesetBodyDiv = oneConsoleTabsetDiv?.querySelector('div.tabsetBody');
  console.log('tablesetBodyDiv found:', tablesetBodyDiv); // Debug
  let splitRightDiv = tablesetBodyDiv?.querySelector('div.split-right');
  console.log('splitRightDiv found:', splitRightDiv); // Debug
  let tablePanelSection = splitRightDiv?.querySelector('section[role="tabpanel"]');
  console.log('tablePanelSection found:', tablePanelSection); // Debug
  let oneWorkspaceDiv = tablePanelSection?.querySelector('div.oneWorkspace');
  console.log('oneWorkspaceDiv found:', oneWorkspaceDiv); // Debug
  let wsTabsetDiv = oneWorkspaceDiv?.querySelector('div.wsTabset');
  console.log('wsTabsetDiv found:', wsTabsetDiv); // Debug
  let nestedTablePanelSection = wsTabsetDiv?.querySelector('section[role="tabpanel"]');
  console.log('nestedTablePanelSection found:', nestedTablePanelSection); // Debug
  let oneWorkspaceTabWrapperDiv = nestedTablePanelSection?.querySelector('div.oneWorkspaceTabWrapper');
  console.log('oneWorkspaceTabWrapperDiv found:', oneWorkspaceTabWrapperDiv); // Debug
  let windowViewModeMaximizedDiv = oneWorkspaceTabWrapperDiv?.querySelector('div.windowViewMode-maximized');
  console.log('windowViewModeMaximizedDiv found:', windowViewModeMaximizedDiv); // Debug
  let brandBandDiv = windowViewModeMaximizedDiv?.querySelector('div#brandBand_2');
  console.log('brandBandDiv found:', brandBandDiv); // Debug
  let templateContainerDiv = brandBandDiv?.querySelector('div.slds-template__container');
  console.log('templateContainerDiv found:', templateContainerDiv); // Debug
  let setupComponentDiv = templateContainerDiv?.querySelector('div.component');
  console.log('setupComponentDiv found:', setupComponentDiv); // Debug
  let setupContentDiv = setupComponentDiv?.querySelector('div.setupcontent');
  console.log('setupContentDiv found:', setupContentDiv); // Debug
  
  // Get the second child of `setupcontent`
  let secondChildSetupContent = setupContentDiv?.children[1];
  console.log('secondChildSetupContent found:', secondChildSetupContent); // Debug
  
  // Navigate to the next child and iframe
  let oneAlohaPageDiv = secondChildSetupContent?.querySelector('div.oneAlohaPage');
  console.log('oneAlohaPageDiv found:', oneAlohaPageDiv); // Debug
  let forceAloha = oneAlohaPageDiv?.querySelector('force-aloha-page');
  console.log('forceAloha found:', forceAloha); // Debug
  let contentDiv = forceAloha.shadowRoot?.querySelector('.iframe-parent');
  console.log('contentDiv found:', contentDiv); // Debug
  let iframe = contentDiv?.querySelector('iframe');
  console.log('iframe found:', iframe); // Debug
  let iframeDocument = iframe?.contentWindow?.document;
  console.log('iframeDocument found:', iframeDocument); // Debug
  let iframeBody = iframeDocument?.body;
  console.log('iframeBody found:', iframeBody); // Debug
  let pageBlockDiv = iframeBody?.querySelector('div.bPageBlock');
  console.log('pageBlockDiv found:', pageBlockDiv); // Debug
  let pbBodyDiv = pageBlockDiv?.querySelector('div.pbBody');
  console.log('pbBodyDiv found:', pbBodyDiv); // Debug
  let pbSubsection = pbBodyDiv?.querySelector('div.pbSubsection');
  console.log('pbSubsection found:', pbSubsection); // Debug
  let detailListTable = pbSubsection?.querySelector('table.detailList');
  console.log('detailListTable found:', detailListTable); // Debug
  let tableBody = detailListTable?.querySelector('tbody');
  console.log('tableBody found:', tableBody); // Debug
  let targetTableRow = tableBody?.lastElementChild;
  console.log('targetTableRow found:', targetTableRow); // Debug
  let dataColDiv = targetTableRow?.querySelector('td.dataCol');
  console.log('dataColDiv found:', dataColDiv); // Debug
  let targetPre = dataColDiv?.querySelector('pre.codeBlock');
  console.log('targetPre found:', targetPre); // Debug

  if (targetPre) {
    console.log('logs found');
    // Enhance logs if log elements exist
    let logElements = targetPre.innerHTML;
    if (logElements.length > 0) {
      logElements = logElements.replace(/ERROR/g, "<span style='color:red;font-weight:bold;'>ERROR</span>");
      logElements = logElements.replace(/DEBUG/g, "<span style='color:green;font-weight:bold;'>DEBUG</span>");
      logElements = logElements.replace(/VARIABLE_ASSIGNMENT/g, "<span style='color:blue;font-weight:bold;'>VARIABLE_ASSIGNMENT</span>");
      logElements = logElements.replace(/SYSTEM_METHOD_ENTRY/g, "<span style='color:orange;font-weight:bold;'>SYSTEM_METHOD_ENTRY</span>");
      logElements = logElements.replace(/SYSTEM_METHOD_EXIT/g, "<span style='color:#FFA500;font-weight:bold;'>SYSTEM_METHOD_EXIT</span>");
      logElements = logElements.replace(/STATEMENT_EXECUTE/g, "<span style='color:purple;font-weight:bold;'>STATEMENT_EXECUTE</span>");
      logElements = logElements.replace(/SYSTEM_MODE_ENTER/g, "<span style='color:darkcyan;font-weight:bold;'>SYSTEM_MODE_ENTER</span>");
      logElements = logElements.replace(/HEAP_ALLOCATE/g, "<span style='color:teal;font-weight:bold;'>HEAP_ALLOCATE</span>");
      logElements = logElements.replace(/LIMIT_USAGE/g, "<span style='color:magenta;font-weight:bold;'>LIMIT_USAGE</span>");

      targetPre.innerHTML = logElements;
    }
  } else {
    console.log('logs not found');
  }
}

// Execute enhanceLogs once the DOM content is fully loaded
setTimeout(() => {
  enhanceLogs();
  console.log('Logs enhancement triggered after timeout!');
}, 5000);