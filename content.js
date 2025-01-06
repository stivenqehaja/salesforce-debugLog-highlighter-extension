// Function to enhance the visibility of specific elements within the logs
function enhanceLogs() {

  // Start from the body
  let body = document.body;
  let desktopDiv = body.querySelector('div.desktop');
  let viewportDiv = desktopDiv?.querySelector('div.viewport');
  let layoutContentSection = viewportDiv?.querySelector('section.layoutContent');
  let workspaceManagerDiv = layoutContentSection?.querySelector('div.workspaceManager');
  let oneConsoleTabsetDiv = workspaceManagerDiv?.querySelector('div.oneConsoleTabset');
  let tablesetBodyDiv = oneConsoleTabsetDiv?.querySelector('div.tabsetBody ');
  let splitRightDiv = tablesetBodyDiv?.querySelector('div.split-right');
  let tablePanelSection = splitRightDiv?.querySelector('section[role="tabpanel"]');
  let oneWorkspaceDiv = tablePanelSection?.querySelector('div.oneWorkspace');
  let wsTabsetDiv = oneWorkspaceDiv?.querySelector('div.wsTabset');
  let nestedTablePanelSection = wsTabsetDiv?.querySelector('section[role="tabpanel"]');
  let oneWorkspaceTabWrapperDiv = nestedTablePanelSection?.querySelector('div.oneWorkspaceTabWrapper');
  let windowViewModeMaximizedDiv = oneWorkspaceTabWrapperDiv?.querySelector('div.windowViewMode-maximized');
  let brandBandDiv = windowViewModeMaximizedDiv?.querySelector('div#brandBand_2');
  let templateContainerDiv = brandBandDiv?.querySelector('div.slds-template__container');
  let setupComponentDiv = templateContainerDiv?.querySelector('div.component');
  let setupContentDiv = setupComponentDiv?.querySelector('div.setupcontent');
  
  // Get the second child of `setupcontent`
  let secondChildSetupContent = setupContentDiv?.children[1];
  
  // Navigate to the next child and iframe
  let oneAlohaPageDiv = secondChildSetupContent?.querySelector('div.oneAlohaPage');
  let forceaAloha = oneAlohaPageDiv?.querySelector('force-aloha-page');
  let contentDiv = forceaAloha.shadowRoot.querySelector('.iframe-parent');
  let iframe = contentDiv?.querySelector('iframe');
  let iframeDocument = iframe.contentWindow.document;
  let iframeBody = iframeDocument.body;
  let pageBlockDiv = iframeBody.querySelector('div.bPageBlock');
  let pbBodyDiv = pageBlockDiv.querySelector('div.pbBody');
  let pbSubsection = pbBodyDiv.querySelector('div.pbSubsection');
  let detailListTable = pbSubsection.querySelector('table.detailList');
  let tableBody = detailListTable.querySelector('tbody');
  let targetTableRow = tableBody.lastElementChild;
  let dataColDiv = targetTableRow.querySelector('td.dataCol');
  let targetPre = dataColDiv.querySelector('pre.codeBlock');
  console.log(targetPre.innerHTML);


  // Enhance logs if log elements exist
  const logElements = targetPre.innerHTML;
  if (logElements.length > 0) {
    logElements.forEach(log => {
      let logText = log.innerText;

      // Apply highlighting to log text
      logText = logText.replace(/ERROR/g, "<span style='color:red;font-weight:bold;'>ERROR</span>");
      logText = logText.replace(/DEBUG/g, "<span style='color:green;font-weight:bold;'>DEBUG</span>");
      logText = logText.replace(/VARIABLE_ASSIGNMENT/g, "<span style='color:blue;font-weight:bold;'>VARIABLE_ASSIGNMENT</span>");
      logText = logText.replace(/SYSTEM_METHOD_ENTRY/g, "<span style='color:orange;font-weight:bold;'>SYSTEM_METHOD_ENTRY</span>");
      logText = logText.replace(/SYSTEM_METHOD_EXIT/g, "<span style='color:#FFA500;font-weight:bold;'>SYSTEM_METHOD_EXIT</span>");
      logText = logText.replace(/STATEMENT_EXECUTE/g, "<span style='color:purple;font-weight:bold;'>STATEMENT_EXECUTE</span>");
      logText = logText.replace(/SYSTEM_MODE_ENTER/g, "<span style='color:darkcyan;font-weight:bold;'>SYSTEM_MODE_ENTER</span>");
      logText = logText.replace(/HEAP_ALLOCATE/g, "<span style='color:teal;font-weight:bold;'>HEAP_ALLOCATE</span>");
      logText = logText.replace(/LIMIT_USAGE/g, "<span style='color:magenta;font-weight:bold;'>LIMIT_USAGE</span>");

      // Apply the modified HTML back to the log
      log.innerHTML = logText;
    });
  }
}

// Observe changes on the page
function observePageChanges() {
  const targetNode = document.body; // Monitor the entire body for changes

  const config = { childList: true, subtree: true };

  const callback = function(mutationsList, observer) {
    mutationsList.forEach(mutation => {
      const logElements = document.querySelectorAll('pre.codeBlock');
      if (logElements.length > 0) {
        enhanceLogs(); // Enhance logs once they're added to the DOM
      }
    });
  };

  // Create a new observer and start observing the page
  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
}

// Listen for the key combination to activate the script
window.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.shiftKey && event.key === 'Y') {
    console.log("Enhancing logs...");
    observePageChanges();
  }
});

// Start observing the page when the DOM is fully loaded
window.addEventListener('DOMContentLoaded', () => {
  console.log("Extension loaded. Press CTRL + SHIFT + Y to activate.");
});
