
import React from 'react';
import './SecurityInfoMonitoring.scss';

const AgentList = () => {
    return(
        <>
            <div className="euiPanel euiPanel--paddingMedium">
                <div>
                    <div className="euiFlexGroup euiFlexGroup--gutterLarge euiFlexGroup--directionRow euiFlexGroup--responsive">
                        
                        <div className="euiFlexItem">
                            <div className="euiFlexGroup euiFlexGroup--gutterLarge euiFlexGroup--directionRow euiFlexGroup--responsive">
                                <div className="euiFlexItem">
                                    <h2 className="euiTitle euiTitle--small">Agents (1)</h2>
                                </div>
                            </div>
                        </div>

                        <div className="euiFlexItem euiFlexItem--flexGrowZero">
                            <button className="euiButtonEmpty euiButtonEmpty--primary">
                                <span className="euiButtonContent euiButtonEmpty__content">
                                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="euiIcon euiIcon--medium euiIcon-isLoaded euiButtonContent__icon" focusable="false" role="img" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M8 7h3.5a.5.5 0 110 1H8v3.5a.5.5 0 11-1 0V8H3.5a.5.5 0 010-1H7V3.5a.5.5 0 011 0V7zm-.5-7C11.636 0 15 3.364 15 7.5S11.636 15 7.5 15 0 11.636 0 7.5 3.364 0 7.5 0zm0 .882a6.618 6.618 0 100 13.236A6.618 6.618 0 007.5.882z"></path>
                                </svg>
                                <span className="euiButtonEmpty__text">Deploy new agent</span>
                                </span>
                            </button>
                        </div>

                        <div className=" euiFlexItem euiFlexItem--flexGrowZero">
                            <button className="euiButtonEmpty euiButtonEmpty--primary" type="button">
                                <span className="euiButtonContent euiButtonEmpty__content">
                                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="euiIcon euiIcon--medium euiIcon-isLoaded euiButtonContent__icon" focusable="false" role="img" aria-hidden="true">
                                        <path d="M9 10.114l1.85-1.943a.52.52 0 01.77 0c.214.228.214.6 0 .829l-1.95 2.05a1.552 1.552 0 01-2.31 0L5.41 9a.617.617 0 010-.829.52.52 0 01.77 0L8 10.082V1.556C8 1.249 8.224 1 8.5 1s.5.249.5.556v8.558zM4.18 6a.993.993 0 00-.972.804l-1.189 6A.995.995 0 002.991 14h11.018a1 1 0 00.972-1.196l-1.19-6a.993.993 0 00-.97-.804H4.18zM6 5v1h5V5h1.825c.946 0 1.76.673 1.946 1.608l1.19 6A2 2 0 0114.016 15H2.984a1.992 1.992 0 01-1.945-2.392l1.19-6C2.414 5.673 3.229 5 4.174 5H6z"></path>
                                    </svg>
                                    <span className="euiButtonEmpty__text">Export formatted</span>
                                </span>
                            </button>
                        </div>

                        <div className="euiFlexItem euiFlexItem--flexGrowZero">
                            <span className="euiToolTipAnchor">
                                <button className="euiButtonEmpty euiButtonEmpty--primary" type="button">
                                    <span className="euiButtonContent euiButtonEmpty__content">
                                        <span className="euiButtonEmpty__text">
                                            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="euiIcon euiIcon--medium euiIcon--primary euiIcon--app euiIcon-isLoaded" focusable="false" role="img" aria-hidden="true">
                                                <path className="euiIcon__fillSecondary" d="M16 21a5 5 0 110-10 5 5 0 010 10zm0-8a3 3 0 100 6 3 3 0 000-6z"></path>
                                                <path d="M20 32h-8v-4.06a1 1 0 00-1.61-.67l-2.88 2.87-5.65-5.65 2.87-2.87a.92.92 0 00.2-1 .93.93 0 00-.86-.6H0V12h4.06a.92.92 0 00.85-.58.94.94 0 00-.19-1L1.86 7.51l5.65-5.65 2.87 2.87A1 1 0 0012 4.06V0h8v4.06a1 1 0 001.61.67l2.87-2.87 5.66 5.66-2.87 2.87a.92.92 0 00-.2 1 .93.93 0 00.86.6H32v8h-4.06a.92.92 0 00-.85.58.94.94 0 00.19 1l2.87 2.87-5.66 5.66-2.87-2.87a1 1 0 00-1.61.67L20 32zm-6-2h4v-2.06a3 3 0 015-2.08l1.46 1.46 2.83-2.83L25.86 23a3 3 0 012.08-5H30v-4h-2.06a3 3 0 01-2.08-5l1.46-1.46-2.83-2.85L23 6.14a3 3 0 01-5-2.08V2h-4v2.06a3 3 0 01-5 2.08L7.51 4.69 4.69 7.51 6.14 9a3 3 0 01-2.08 5H2v4h2.06a3 3 0 012.08 5l-1.45 1.49 2.83 2.83L9 25.86a3 3 0 015 2.08V30z"></path>
                                            </svg>
                                        </span>
                                    </span>
                                </button>
                            </span>
                        </div>

                        

                    </div>

                    <div className="euiSpacer euiSpacer--xs"></div>
                </div>


                <div className="euiFlexGroup euiFlexGroup--gutterLarge euiFlexGroup--directionRow euiFlexGroup--responsive">
                    <div className="euiFlexItem">
                        <div className="euiBasicTable">
                            <div>
                                <div className="euiTableHeaderMobile"><div className="euiFlexGroup euiFlexGroup--gutterLarge euiFlexGroup--alignItemsBaseline euiFlexGroup--justifyContentSpaceBetween euiFlexGroup--directionRow"><div className="euiFlexItem euiFlexItem--flexGrowZero"></div><div className="euiFlexItem euiFlexItem--flexGrowZero"><div className="euiTableSortMobile"><div className="euiPopover euiPopover--anchorDownRight"><div className="euiPopover__anchor"><button className="euiButtonEmpty euiButtonEmpty--primary euiButtonEmpty--xSmall euiButtonEmpty--flushRight" type="button"><span className="euiButtonContent euiButtonContent--iconRight euiButtonEmpty__content"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="euiIcon euiIcon--medium euiButtonContent__icon" focusable="false" role="img" aria-hidden="true"><path fill-rule="non-zero" d="M13.069 5.157L8.384 9.768a.546.546 0 01-.768 0L2.93 5.158a.552.552 0 00-.771 0 .53.53 0 000 .759l4.684 4.61c.641.631 1.672.63 2.312 0l4.684-4.61a.53.53 0 000-.76.552.552 0 00-.771 0z"></path></svg><span className="euiButtonEmpty__text">Sorting</span></span></button></div></div></div></div></div></div>
                                <table className="euiTable euiTable--responsive" id="__table_45d38bf1-b354-11ed-91ae-479a892543d2">
                                    <caption className="euiScreenReaderOnly euiTableCaption">This table contains 1 rows.</caption>
                                    <thead>
                                        <tr>
                                            <th className="euiTableHeaderCell" scope="col" role="columnheader" aria-sort="ascending" aria-live="polite" data-test-subj="tableHeaderCell_id_0" >
                                                <button type="button" className="euiTableHeaderButton euiTableHeaderButton-isSorted" data-test-subj="tableHeaderSortButton">
                                                    <span className="euiTableCellContent">
                                                        <span title="ID; Sorted in ascending order" className="euiTableCellContent__text">ID</span>
                                                        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="euiIcon euiIcon--medium euiIcon-isLoaded euiTableSortIcon" focusable="false" role="img" aria-label="Sorted in ascending order">
                                                            <path d="M8 4.207v8.237c0 .307-.224.556-.5.556s-.5-.249-.5-.556V4.207L2.904 8.303a.5.5 0 01-.707-.707l4.242-4.242a1.5 1.5 0 012.122 0l4.242 4.242a.5.5 0 11-.707.707L8 4.207z"></path>
                                                        </svg>
                                                        <span className="euiScreenReaderOnly">Click to sort in descending order</span>
                                                    </span>
                                                </button>
                                            </th>
                                            <th className="euiTableHeaderCell" scope="col" role="columnheader" aria-sort="none" aria-live="polite" data-test-subj="tableHeaderCell_name_1" >
                                                <button type="button" className="euiTableHeaderButton" data-test-subj="tableHeaderSortButton">
                                                    <span className="euiTableCellContent">
                                                        <span className="euiTableCellContent__text" title="Name">Name</span>
                                                        <span className="euiScreenReaderOnly">Click to sort in ascending order</span>
                                                    </span>
                                                </button>
                                            </th>
                                            <th className="euiTableHeaderCell" scope="col" role="columnheader" aria-sort="none" aria-live="polite" data-test-subj="tableHeaderCell_ip_2">
                                                <button type="button" className="euiTableHeaderButton" data-test-subj="tableHeaderSortButton">
                                                    <span className="euiTableCellContent">
                                                        <span className="euiTableCellContent__text" title="IP">IP</span>
                                                        <span className="euiScreenReaderOnly">Click to sort in ascending order</span>
                                                    </span>
                                                </button>
                                            </th>
                                            <th className="euiTableHeaderCell" scope="col" role="columnheader" aria-sort="none" aria-live="polite" data-test-subj="tableHeaderCell_group_3" >
                                                <button type="button" className="euiTableHeaderButton" data-test-subj="tableHeaderSortButton">
                                                    <span className="euiTableCellContent">
                                                        <span className="euiTableCellContent__text" title="Group(s)">Group(s)</span>
                                                        <span className="euiScreenReaderOnly">Click to sort in ascending order</span>
                                                    </span>
                                                </button>
                                            </th>
                                            <th className="euiTableHeaderCell" scope="col" role="columnheader" aria-sort="none" aria-live="polite" data-test-subj="tableHeaderCell_os_name_4" >
                                                <button type="button" className="euiTableHeaderButton" data-test-subj="tableHeaderSortButton">
                                                    <span className="euiTableCellContent">
                                                        <span className="euiTableCellContent__text" title="OS">OS</span>
                                                        <span className="euiScreenReaderOnly">Click to sort in ascending order</span>
                                                    </span>
                                                </button>
                                            </th>
                                            <th className="euiTableHeaderCell" scope="col" role="columnheader" aria-sort="none" aria-live="polite" data-test-subj="tableHeaderCell_node_name_5" >
                                                <button type="button" className="euiTableHeaderButton" data-test-subj="tableHeaderSortButton">
                                                    <span className="euiTableCellContent">
                                                        <span className="euiTableCellContent__text" title="Cluster node">Cluster node</span>
                                                        <span className="euiScreenReaderOnly">Click to sort in ascending order</span>
                                                    </span>
                                                </button>
                                            </th>
                                            <th className="euiTableHeaderCell" scope="col" role="columnheader" aria-sort="none" aria-live="polite" data-test-subj="tableHeaderCell_version_6" >
                                                <button type="button" className="euiTableHeaderButton" data-test-subj="tableHeaderSortButton">
                                                    <span className="euiTableCellContent">
                                                        <span className="euiTableCellContent__text" title="Version">Version</span>
                                                        <span className="euiScreenReaderOnly">Click to sort in ascending order</span>
                                                    </span>
                                                </button>
                                            </th>
                                            <th className="euiTableHeaderCell" scope="col" role="columnheader" aria-sort="none" aria-live="polite" data-test-subj="tableHeaderCell_dateAdd_7" >
                                                <button type="button" className="euiTableHeaderButton" data-test-subj="tableHeaderSortButton">
                                                    <span className="euiTableCellContent">
                                                        <span className="euiTableCellContent__text" title="Registration date">Registration date</span>
                                                        <span className="euiScreenReaderOnly">Click to sort in ascending order</span>
                                                    </span>
                                                </button>
                                            </th>
                                            <th className="euiTableHeaderCell" scope="col" role="columnheader" aria-sort="none" aria-live="polite" data-test-subj="tableHeaderCell_lastKeepAlive_8" >
                                                <button type="button" className="euiTableHeaderButton" data-test-subj="tableHeaderSortButton">
                                                    <span className="euiTableCellContent">
                                                        <span className="euiTableCellContent__text" title="Last keep alive">Last keep alive</span>
                                                        <span className="euiScreenReaderOnly">Click to sort in ascending order</span>
                                                    </span>
                                                </button>
                                            </th>
                                            <th className="euiTableHeaderCell" scope="col" role="columnheader" aria-sort="none" aria-live="polite" data-test-subj="tableHeaderCell_status_9" >
                                                <button type="button" className="euiTableHeaderButton" data-test-subj="tableHeaderSortButton">
                                                    <span className="euiTableCellContent">
                                                        <span className="euiTableCellContent__text" title="Status">Status</span>
                                                        <span className="euiScreenReaderOnly">Click to sort in ascending order</span>
                                                    </span>
                                                </button>
                                            </th>
                                            <th className="euiTableHeaderCell" scope="col" role="columnheader" data-test-subj="tableHeaderCell_actions_10" >
                                                <div className="euiTableCellContent euiTableCellContent--alignRight">
                                                    <span className="euiTableCellContent__text" title="Actions">Actions</span>
                                                </div>
                                            </th>
                                        
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="euiTableRow customRowClass euiTableRow-isClickable" data-test-subj="row-001" role="button"><td className="euiTableRowCell"><div className="euiTableRowCell__mobileHeader euiTableRowCell--hideForDesktop">ID</div><div className="euiTableCellContent"><span className="euiTableCellContent__text">001</span></div></td><td className="euiTableRowCell"><div className="euiTableRowCell__mobileHeader euiTableRowCell--hideForDesktop">Name</div><div className="euiTableCellContent euiTableCellContent--truncateText"><span className="euiTableCellContent__text">agent-1</span></div></td><td className="euiTableRowCell"><div className="euiTableRowCell__mobileHeader euiTableRowCell--hideForDesktop">IP</div><div className="euiTableCellContent euiTableCellContent--truncateText"><span className="euiTableCellContent__text">172.30.130.8</span></div></td><td className="euiTableRowCell"><div className="euiTableRowCell__mobileHeader euiTableRowCell--hideForDesktop">Group(s)</div><div className="euiTableCellContent euiTableCellContent--truncateText euiTableCellContent--overflowingContent">-</div></td><td className="euiTableRowCell" ><div className="euiTableRowCell__mobileHeader euiTableRowCell--hideForDesktop">OS</div><div className="euiTableCellContent euiTableCellContent--truncateText euiTableCellContent--overflowingContent"><span className="euiTableCellContent__text euiTableCellContent--truncateText"><i className="fa fa-false AgentsTable__soBadge AgentsTable__soBadge--false" aria-hidden="true"></i> -</span></div></td><td className="euiTableRowCell"><div className="euiTableRowCell__mobileHeader euiTableRowCell--hideForDesktop">Cluster node</div><div className="euiTableCellContent euiTableCellContent--truncateText"><span className="euiTableCellContent__text">-</span></div></td><td className="euiTableRowCell" ><div className="euiTableRowCell__mobileHeader euiTableRowCell--hideForDesktop">Version</div><div className="euiTableCellContent euiTableCellContent--truncateText"><span className="euiTableCellContent__text">-</span></div></td><td className="euiTableRowCell" ><div className="euiTableRowCell__mobileHeader euiTableRowCell--hideForDesktop">Registration date</div><div className="euiTableCellContent euiTableCellContent--truncateText"><span className="euiTableCellContent__text">Feb 2, 2023 @ 13:38:08.000</span></div></td><td className="euiTableRowCell"><div className="euiTableRowCell__mobileHeader euiTableRowCell--hideForDesktop">Last keep alive</div><div className="euiTableCellContent euiTableCellContent--truncateText"><span className="euiTableCellContent__text">-</span></div></td><td className="euiTableRowCell" ><div className="euiTableRowCell__mobileHeader euiTableRowCell--hideForDesktop">Status</div><div className="euiTableCellContent euiTableCellContent--truncateText euiTableCellContent--overflowingContent"><span className="euiFlexGroup euiFlexGroup--gutterExtraSmall euiFlexGroup--alignItemsCenter euiFlexGroup--directionRow"><span className="euiToolTipAnchor"><span className="euiFlexItem euiFlexItem--flexGrowZero"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="euiIcon euiIcon--medium" focusable="false" role="img" aria-hidden="true"><circle cx="8" cy="8" r="4"></circle></svg></span></span><span className="hide-agent-status">never connected</span></span></div></td><td className="euiTableRowCell"><div className="euiTableRowCell__mobileHeader euiTableRowCell--hideForDesktop">Actions</div><div className="euiTableCellContent euiTableCellContent--alignRight euiTableCellContent--overflowingContent"><div className="icon-box-action"><span className="euiToolTipAnchor"><button className="euiButtonIcon euiButtonIcon--primary" type="button" aria-label="Open summary panel for this agent"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="euiIcon euiIcon--medium euiIcon-isLoaded euiButtonIcon__icon" focusable="false" role="img" aria-hidden="true"><path d="M15.98 7.873c.013.03.02.064.02.098v.06a.24.24 0 01-.02.097C15.952 8.188 13.291 14 8 14S.047 8.188.02 8.128A.24.24 0 010 8.03v-.059c0-.034.007-.068.02-.098C.048 7.813 2.709 2 8 2s7.953 5.813 7.98 5.873zm-1.37-.424a12.097 12.097 0 00-1.385-1.862C11.739 3.956 9.999 3 8 3c-2 0-3.74.956-5.225 2.587a12.098 12.098 0 00-1.701 2.414 12.095 12.095 0 001.7 2.413C4.26 12.043 6.002 13 8 13s3.74-.956 5.225-2.587A12.097 12.097 0 0014.926 8c-.08-.15-.189-.343-.315-.551zM8 4.75A3.253 3.253 0 0111.25 8 3.254 3.254 0 018 11.25 3.253 3.253 0 014.75 8 3.252 3.252 0 018 4.75zm0 1C6.76 5.75 5.75 6.76 5.75 8S6.76 10.25 8 10.25 10.25 9.24 10.25 8 9.24 5.75 8 5.75zm0 1.5a.75.75 0 100 1.5.75.75 0 000-1.5z"></path></svg></button></span>&nbsp;</div></div></td></tr>
                                    
                                    </tbody>
                                
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}

export {AgentList};