(self.webpackChunkinsights_dashboard=self.webpackChunkinsights_dashboard||[]).push([[1603],{29849:(i,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d});var e=a(94015),n=a.n(e),r=a(23645),l=a.n(r),o=a(35080),s=l()(n());s.i(o.Z),s.push([i.id,".dashboard{}.dashboard :root{--ins-color--orange: #ec7a08}.dashboard button:focus{outline:none}.dashboard #root.pf-c-page__main.dashboard{height:auto}.dashboard html,.dashboard body{height:100vh;overflow:hidden}.dashboard .ins-c-sidebar+.pf-c-page__drawer .pf-c-drawer__content>div{display:contents}.dashboard .ins-c-drawer-control{position:absolute;top:100px;right:10px;z-index:1000}.dashboard .ins-c-summary__accent{color:var(--pf-global--palette--black-500)}.dashboard .ins-c-summary__emphasis{font-size:32px;font-size:2rem}.dashboard .ins-c-summary__icon-critical{fill:var(--pf-global--palette--red-100)}.dashboard .ins-c-summary__icon-high{fill:var(--pf-global--palette--orange-300)}.dashboard .ins-c-summary__icon-medium{fill:var(--pf-global--palette--gold-300)}.dashboard .ins-c-summary__icon-low{fill:var(--pf-global--palette--blue-300)}.dashboard .ins-c-summary__icon-flag{fill:var(--pf-global--palette--blue-500)}.dashboard .ins-c-summary__icon-check{fill:var(--pf-global--palette--green-300)}.dashboard .ins-c-summary__icon-info{fill:var(--pf-global--palette--blue-200)}.dashboard .ins-c-summary__title{margin-bottom:10px;margin-bottom:.625rem}.dashboard .ins-c-summary .ins-c-summary__icon+.ins-c-summary__emphasis{margin-left:10px;margin-left:.625rem;margin-right:10px;margin-right:.625rem}.dashboard .ins-c-metrics{position:relative;display:flex;justify-content:space-evenly}.dashboard .ins-c-metrics::before{position:absolute;content:'';top:0;right:0;bottom:0;left:0;pointer-events:none;border-top:var(--pf-global--BorderWidth--sm) solid var(--pf-global--BorderColor--100);border-bottom:var(--pf-global--BorderWidth--sm) solid var(--pf-global--BorderColor--100)}.dashboard .ins-c-metrics__metric{display:inline-grid;align-items:center;grid-auto-flow:column;grid-gap:var(--pf-global--spacer--sm);padding:var(--pf-global--spacer--md) var(--pf-global--spacer--sm)}.dashboard .ins-c-metrics__metric>svg{font-size:var(--pf-global--icon--FontSize--md)}.dashboard .ins-c-metrics__metric-number{font-size:var(--pf-global--icon--FontSize--md)}.dashboard .ins-c-metrics__metric__label{color:var(--pf-global--Color--200)}.dashboard .ins-c-gauge svg{margin-top:-44px;margin-left:-2px}.dashboard .ins-c-gauge__metrics-percentage{margin-top:10px;text-align:center}.dashboard .page__dashboard .pf-c-empty-state__body{font-size:var(--pf-global--FontSize--sm)}.dashboard .ins-m-green{color:var(--pf-global--palette--green-400)}.dashboard .ins-m-red{color:var(--pf-global--palette--red-100)}.dashboard .pf-c-page__main-section.pf-m-dark-1000{--pf-c-page__main-section--BackgroundColor: var(--pf-global--palette--black-1000)}.dashboard .ins-c-text--black-400{color:var(--pf-global--palette--black-400)}.dashboard .ins-c-width-limiter{--ins-c-width-limiter--MaxWidth: auto;--ins-c-width-limiter--MinWidth: 0;max-width:var(--ins-c-width-limiter--MaxWidth);min-width:var(--ins-c-width-limiter--MinWidth)}@media (min-width: 576px){.dashboard .ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth))}}@media (min-width: 768px){.dashboard .ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth)))}}@media (min-width: 992px){.dashboard .ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-lg, var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth))))}}@media (min-width: 1200px){.dashboard .ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-xl, var(--ins-c-width-limiter--MaxWidth-on-lg, var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth)))))}}@media (min-width: 1450px){.dashboard .ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-2xl, var(--ins-c-width-limiter--MaxWidth-on-xl, var(--ins-c-width-limiter--MaxWidth-on-lg, var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth))))))}}@media (min-width: 576px){.dashboard .ins-c-width-limiter{min-width:var(--ins-c-width-limiter--MinWidth-on-sm, var(--ins-c-width-limiter--MinWidth))}}@media (min-width: 768px){.dashboard .ins-c-width-limiter{min-width:var(--ins-c-width-limiter--MinWidth-on-md, var(--ins-c-width-limiter--MinWidth-on-sm, var(--ins-c-width-limiter--MinWidth)))}}@media (min-width: 992px){.dashboard .ins-c-width-limiter{min-width:var(--ins-c-width-limiter--MinWidth-on-lg, var(--ins-c-width-limiter--MinWidth-on-md, var(--ins-c-width-limiter--MinWidth-on-sm, var(--ins-c-width-limiter--MinWidth))))}}@media (min-width: 1200px){.dashboard .ins-c-width-limiter{min-width:var(--ins-c-width-limiter--MinWidth-on-xl, var(--ins-c-width-limiter--MinWidth-on-lg, var(--ins-c-width-limiter--MinWidth-on-md, var(--ins-c-width-limiter--MinWidth-on-sm, var(--ins-c-width-limiter--MinWidth)))))}}@media (min-width: 1450px){.dashboard .ins-c-width-limiter{min-width:var(--ins-c-width-limiter--MinWidth-on-2xl, var(--ins-c-width-limiter--MinWidth-on-xl, var(--ins-c-width-limiter--MinWidth-on-lg, var(--ins-c-width-limiter--MinWidth-on-md, var(--ins-c-width-limiter--MinWidth-on-sm, var(--ins-c-width-limiter--MinWidth))))))}}.dashboard .pf-c-data-list{--ins-c-data-list__item-row--MinHeight: auto}@media screen and (min-width: 768px){.dashboard .pf-c-data-list.ins-m-toggle-right-on-md .pf-c-data-list__item-control{order:1;margin-right:calc(var(--pf-global--spacer--sm) * -1)}}.dashboard .pf-c-data-list .pf-c-data-list__cell.pf-m-display-flex{display:flex}.dashboard .pf-c-data-list .pf-c-data-list__cell+.pf-c-data-list__cell.pf-m-flex-none,.dashboard .pf-c-data-list .pf-c-data-list__cell.pf-m-flex-none{flex:none}.dashboard .pf-c-data-list.ins-m-no-border .pf-c-data-list__item::before{content:none}.dashboard .pf-c-data-list.ins-m-no-border .pf-c-data-list__expandable-content{border-top:none}.dashboard .pf-c-data-list.ins-m-no-padding{--pf-c-data-list__item-row--PaddingRight: 0;--pf-c-data-list__item-row--PaddingLeft: 0}.dashboard .pf-c-data-list.ins-m-no-top-border{--pf-c-data-list--BorderTopWidth: 0;--pf-c-data-list--BorderTopColor: transparent}.dashboard .pf-c-card>.pf-c-card{--pf-c-card--BoxShadow: none}@media screen and (min-width: 768px){.dashboard .pf-c-card.ins-m-toggle-right-on-md .pf-c-card__title{flex:1}.dashboard .pf-c-card.ins-m-toggle-right-on-md .pf-c-card__header-toggle{order:5;margin-right:calc(var(--pf-global--spacer--sm) * -1);margin-left:0;padding-left:var(--pf-c-card__header-toggle--MarginRight)}}.dashboard .pf-c-table.ins-m-no-left-padding{padding-right:var(--pf-c-table--cell--PaddingLeft);padding-left:0}.dashboard .pf-c-table.ins-m-no-styling tr:not(.pf-c-table__expandable-row){border-bottom:none}.dashboard .pf-c-table.ins-m-no-styling tr>*{--pf-c-table--cell--PaddingTop: 0;--pf-c-table--cell--PaddingRight: var(--pf-global--spacer--md);--pf-c-table--cell--PaddingBottom: 0;--pf-c-table--cell--PaddingLeft: var(--pf-global--spacer--md)}.dashboard .ins-c-legend{display:grid;grid-template-columns:max-content 1fr;column-gap:var(--pf-global--spacer--md)}.dashboard .ins-c-legend__item{display:flex;flex-wrap:nowrap}.dashboard .ins-c-legend__dot{--ins-c-legend__dot--BackgroundColor: #000;display:flex;align-items:center;margin-right:var(--pf-global--spacer--sm)}.dashboard .ins-c-legend__dot::before{content:'';display:block;width:12px;height:12px;border-radius:50%;background-color:var(--ins-c-legend__dot--BackgroundColor)}.dashboard .ins-c-legend__dot>*{margin-left:var(--pf-global--spacer--sm)}.dashboard .ins-c-legend__text{white-space:nowrap}.dashboard .pf-c-form-control.pf-m-plain{border:none}.dashboard .ins-l-columns{--ins-l-columns--MarginBottom: var(--pf-global--spacer--md);--ins-l-columns--Gap: var(--pf-global--gutter);gap:var(--ins-l-columns--Gap);column-fill:balance}@media screen and (min-width: 768px){.dashboard .ins-l-columns{columns:2}}@media screen and (min-width: 1200px){.dashboard .ins-l-columns.ins-m-3-col-on-xl{columns:3}}.dashboard .ins-l-columns>*{margin-bottom:var(--ins-l-columns--MarginBottom);break-inside:avoid}.dashboard .ins-l-autofit{--ins-l-autofit--m-gutter--ColumnGap: var(--pf-global--gutter--md);--ins-l-autofit--m-gutter--RowGap: var(--pf-global--gutter--md);--ins-l-autofit--GridTemplateColumns--min: 250px;--ins-l-autofit--GridTemplateColumns--minmax--min: var(--ins-l-autofit--GridTemplateColumns--min);--ins-l-autofit--GridTemplateColumns: repeat(auto-fit, minmax(var(--ins-l-autofit--GridTemplateColumns--minmax--min), 1fr));--ins-l-autofit--GridTemplateRows: auto;display:grid;grid-template-columns:var(--ins-l-autofit--GridTemplateColumns);grid-template-rows:var(--ins-l-autofit--GridTemplateRows);--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min)}.dashboard .ins-l-autofit.pf-m-gutter{row-gap:var(--ins-l-autofit--m-gutter--RowGap);column-gap:var(--ins-l-autofit--m-gutter--ColumnGap)}@media (min-width: 576px){.dashboard .ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min))}}@media (min-width: 768px){.dashboard .ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min)))}}@media (min-width: 992px){.dashboard .ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-lg, var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min))))}}@media (min-width: 1200px){.dashboard .ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-xl, var(--ins-l-autofit--GridTemplateColumns--min-on-lg, var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min)))))}}@media (min-width: 1450px){.dashboard .ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-2xl, var(--ins-l-autofit--GridTemplateColumns--min-on-xl, var(--ins-l-autofit--GridTemplateColumns--min-on-lg, var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min))))))}}.dashboard .pf-l-grid.pf-m-full-height>.pf-c-card{align-self:stretch}.dashboard #root.pf-c-page__main{height:auto}.dashboard .ins-c-info-icon{padding-top:0;padding-bottom:0}\n","",{version:3,sources:["webpack://./src/SmartComponents/Advisor/Advisor.scss"],names:[],mappings:"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",sourcesContent:[".dashboard{\n@import url(~@patternfly/patternfly/utilities/Alignment/alignment.css);:root{--ins-color--orange: #ec7a08}button:focus{outline:none}#root.pf-c-page__main.dashboard{height:auto}html,body{height:100vh;overflow:hidden}.ins-c-sidebar+.pf-c-page__drawer .pf-c-drawer__content>div{display:contents}.ins-c-drawer-control{position:absolute;top:100px;right:10px;z-index:1000}.ins-c-summary__accent{color:var(--pf-global--palette--black-500)}.ins-c-summary__emphasis{font-size:32px;font-size:2rem}.ins-c-summary__icon-critical{fill:var(--pf-global--palette--red-100)}.ins-c-summary__icon-high{fill:var(--pf-global--palette--orange-300)}.ins-c-summary__icon-medium{fill:var(--pf-global--palette--gold-300)}.ins-c-summary__icon-low{fill:var(--pf-global--palette--blue-300)}.ins-c-summary__icon-flag{fill:var(--pf-global--palette--blue-500)}.ins-c-summary__icon-check{fill:var(--pf-global--palette--green-300)}.ins-c-summary__icon-info{fill:var(--pf-global--palette--blue-200)}.ins-c-summary__title{margin-bottom:10px;margin-bottom:.625rem}.ins-c-summary .ins-c-summary__icon+.ins-c-summary__emphasis{margin-left:10px;margin-left:.625rem;margin-right:10px;margin-right:.625rem}.ins-c-metrics{position:relative;display:flex;justify-content:space-evenly}.ins-c-metrics::before{position:absolute;content:'';top:0;right:0;bottom:0;left:0;pointer-events:none;border-top:var(--pf-global--BorderWidth--sm) solid var(--pf-global--BorderColor--100);border-bottom:var(--pf-global--BorderWidth--sm) solid var(--pf-global--BorderColor--100)}.ins-c-metrics__metric{display:inline-grid;align-items:center;grid-auto-flow:column;grid-gap:var(--pf-global--spacer--sm);padding:var(--pf-global--spacer--md) var(--pf-global--spacer--sm)}.ins-c-metrics__metric>svg{font-size:var(--pf-global--icon--FontSize--md)}.ins-c-metrics__metric-number{font-size:var(--pf-global--icon--FontSize--md)}.ins-c-metrics__metric__label{color:var(--pf-global--Color--200)}.ins-c-gauge svg{margin-top:-44px;margin-left:-2px}.ins-c-gauge__metrics-percentage{margin-top:10px;text-align:center}.page__dashboard .pf-c-empty-state__body{font-size:var(--pf-global--FontSize--sm)}.ins-m-green{color:var(--pf-global--palette--green-400)}.ins-m-red{color:var(--pf-global--palette--red-100)}.pf-c-page__main-section.pf-m-dark-1000{--pf-c-page__main-section--BackgroundColor: var(--pf-global--palette--black-1000)}.ins-c-text--black-400{color:var(--pf-global--palette--black-400)}.ins-c-width-limiter{--ins-c-width-limiter--MaxWidth: auto;--ins-c-width-limiter--MinWidth: 0;max-width:var(--ins-c-width-limiter--MaxWidth);min-width:var(--ins-c-width-limiter--MinWidth)}@media (min-width: 576px){.ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth))}}@media (min-width: 768px){.ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth)))}}@media (min-width: 992px){.ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-lg, var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth))))}}@media (min-width: 1200px){.ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-xl, var(--ins-c-width-limiter--MaxWidth-on-lg, var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth)))))}}@media (min-width: 1450px){.ins-c-width-limiter{max-width:var(--ins-c-width-limiter--MaxWidth-on-2xl, var(--ins-c-width-limiter--MaxWidth-on-xl, var(--ins-c-width-limiter--MaxWidth-on-lg, var(--ins-c-width-limiter--MaxWidth-on-md, var(--ins-c-width-limiter--MaxWidth-on-sm, var(--ins-c-width-limiter--MaxWidth))))))}}@media (min-width: 576px){.ins-c-width-limiter{min-width:var(--ins-c-width-limiter--MinWidth-on-sm, var(--ins-c-width-limiter--MinWidth))}}@media (min-width: 768px){.ins-c-width-limiter{min-width:var(--ins-c-width-limiter--MinWidth-on-md, var(--ins-c-width-limiter--MinWidth-on-sm, var(--ins-c-width-limiter--MinWidth)))}}@media (min-width: 992px){.ins-c-width-limiter{min-width:var(--ins-c-width-limiter--MinWidth-on-lg, var(--ins-c-width-limiter--MinWidth-on-md, var(--ins-c-width-limiter--MinWidth-on-sm, var(--ins-c-width-limiter--MinWidth))))}}@media (min-width: 1200px){.ins-c-width-limiter{min-width:var(--ins-c-width-limiter--MinWidth-on-xl, var(--ins-c-width-limiter--MinWidth-on-lg, var(--ins-c-width-limiter--MinWidth-on-md, var(--ins-c-width-limiter--MinWidth-on-sm, var(--ins-c-width-limiter--MinWidth)))))}}@media (min-width: 1450px){.ins-c-width-limiter{min-width:var(--ins-c-width-limiter--MinWidth-on-2xl, var(--ins-c-width-limiter--MinWidth-on-xl, var(--ins-c-width-limiter--MinWidth-on-lg, var(--ins-c-width-limiter--MinWidth-on-md, var(--ins-c-width-limiter--MinWidth-on-sm, var(--ins-c-width-limiter--MinWidth))))))}}.pf-c-data-list{--ins-c-data-list__item-row--MinHeight: auto}@media screen and (min-width: 768px){.pf-c-data-list.ins-m-toggle-right-on-md .pf-c-data-list__item-control{order:1;margin-right:calc(var(--pf-global--spacer--sm) * -1)}}.pf-c-data-list .pf-c-data-list__cell.pf-m-display-flex{display:flex}.pf-c-data-list .pf-c-data-list__cell+.pf-c-data-list__cell.pf-m-flex-none,.pf-c-data-list .pf-c-data-list__cell.pf-m-flex-none{flex:none}.pf-c-data-list.ins-m-no-border .pf-c-data-list__item::before{content:none}.pf-c-data-list.ins-m-no-border .pf-c-data-list__expandable-content{border-top:none}.pf-c-data-list.ins-m-no-padding{--pf-c-data-list__item-row--PaddingRight: 0;--pf-c-data-list__item-row--PaddingLeft: 0}.pf-c-data-list.ins-m-no-top-border{--pf-c-data-list--BorderTopWidth: 0;--pf-c-data-list--BorderTopColor: transparent}.pf-c-card>.pf-c-card{--pf-c-card--BoxShadow: none}@media screen and (min-width: 768px){.pf-c-card.ins-m-toggle-right-on-md .pf-c-card__title{flex:1}.pf-c-card.ins-m-toggle-right-on-md .pf-c-card__header-toggle{order:5;margin-right:calc(var(--pf-global--spacer--sm) * -1);margin-left:0;padding-left:var(--pf-c-card__header-toggle--MarginRight)}}.pf-c-table.ins-m-no-left-padding{padding-right:var(--pf-c-table--cell--PaddingLeft);padding-left:0}.pf-c-table.ins-m-no-styling tr:not(.pf-c-table__expandable-row){border-bottom:none}.pf-c-table.ins-m-no-styling tr>*{--pf-c-table--cell--PaddingTop: 0;--pf-c-table--cell--PaddingRight: var(--pf-global--spacer--md);--pf-c-table--cell--PaddingBottom: 0;--pf-c-table--cell--PaddingLeft: var(--pf-global--spacer--md)}.ins-c-legend{display:grid;grid-template-columns:max-content 1fr;column-gap:var(--pf-global--spacer--md)}.ins-c-legend__item{display:flex;flex-wrap:nowrap}.ins-c-legend__dot{--ins-c-legend__dot--BackgroundColor: #000;display:flex;align-items:center;margin-right:var(--pf-global--spacer--sm)}.ins-c-legend__dot::before{content:'';display:block;width:12px;height:12px;border-radius:50%;background-color:var(--ins-c-legend__dot--BackgroundColor)}.ins-c-legend__dot>*{margin-left:var(--pf-global--spacer--sm)}.ins-c-legend__text{white-space:nowrap}.pf-c-form-control.pf-m-plain{border:none}.ins-l-columns{--ins-l-columns--MarginBottom: var(--pf-global--spacer--md);--ins-l-columns--Gap: var(--pf-global--gutter);gap:var(--ins-l-columns--Gap);column-fill:balance}@media screen and (min-width: 768px){.ins-l-columns{columns:2}}@media screen and (min-width: 1200px){.ins-l-columns.ins-m-3-col-on-xl{columns:3}}.ins-l-columns>*{margin-bottom:var(--ins-l-columns--MarginBottom);break-inside:avoid}.ins-l-autofit{--ins-l-autofit--m-gutter--ColumnGap: var(--pf-global--gutter--md);--ins-l-autofit--m-gutter--RowGap: var(--pf-global--gutter--md);--ins-l-autofit--GridTemplateColumns--min: 250px;--ins-l-autofit--GridTemplateColumns--minmax--min: var(--ins-l-autofit--GridTemplateColumns--min);--ins-l-autofit--GridTemplateColumns: repeat(auto-fit, minmax(var(--ins-l-autofit--GridTemplateColumns--minmax--min), 1fr));--ins-l-autofit--GridTemplateRows: auto;display:grid;grid-template-columns:var(--ins-l-autofit--GridTemplateColumns);grid-template-rows:var(--ins-l-autofit--GridTemplateRows);--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min)}.ins-l-autofit.pf-m-gutter{row-gap:var(--ins-l-autofit--m-gutter--RowGap);column-gap:var(--ins-l-autofit--m-gutter--ColumnGap)}@media (min-width: 576px){.ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min))}}@media (min-width: 768px){.ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min)))}}@media (min-width: 992px){.ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-lg, var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min))))}}@media (min-width: 1200px){.ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-xl, var(--ins-l-autofit--GridTemplateColumns--min-on-lg, var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min)))))}}@media (min-width: 1450px){.ins-l-autofit{--ins-l-autofit--GridTemplateColumns--minmax--min:var(--ins-l-autofit--GridTemplateColumns--min-on-2xl, var(--ins-l-autofit--GridTemplateColumns--min-on-xl, var(--ins-l-autofit--GridTemplateColumns--min-on-lg, var(--ins-l-autofit--GridTemplateColumns--min-on-md, var(--ins-l-autofit--GridTemplateColumns--min-on-sm, var(--ins-l-autofit--GridTemplateColumns--min))))))}}.pf-l-grid.pf-m-full-height>.pf-c-card{align-self:stretch}#root.pf-c-page__main{height:auto}.ins-c-info-icon{padding-top:0;padding-bottom:0}\n\n}"],sourceRoot:""}]);const d=s},41603:(i,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>I});var e=a(96156),n=a(28481),r=(a(32796),a(64169)),l=a(35224),o=a(47173),s=a(68774),d=a(56186),m=a(32203),c=a(70),A=a(60485),p=a(62394),C=a(28191),f=a(92298),u=a(93264),h=a.n(u),g=a(20999),v=a(81976),b=a(72550),w=a(50340),x=a(2447),_=a(24584),B=a(96191),D=a(77121),y=a(51349),M=a(69957),k=a(58471),W=a(58093),G=a(44089),T=a(82141),E=a(85875),S=a(81404),N=a(18623),O=a(86896);function j(i,t){var a=Object.keys(i);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(i);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),a.push.apply(a,e)}return a}function z(i){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){(0,e.Z)(i,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(i,t,Object.getOwnPropertyDescriptor(a,t))}))}return i}const I=function(){var i,t,a,e=[b.r.value,w.k.value,x.$.value,_.x.value],j=(0,O.Z)(),I=(0,u.useState)([]),P=(0,n.Z)(I,2),q=P[0],Z=P[1],F=(0,u.useState)([]),L=(0,n.Z)(F,2),R=L[0],Y=L[1],J=(0,u.useState)(),K=(0,n.Z)(J,2),H=K[0],Q=K[1],U=(0,D.useDispatch)(),V=(0,D.useSelector)((function(i){return i.DashboardStore.advisorStatsRecs})),$=(0,D.useSelector)((function(i){return i.DashboardStore.advisorStatsRecsStatus})),X=(0,D.useSelector)((function(i){return i.DashboardStore.advisorIncidents})),ii=(0,D.useSelector)((function(i){return i.DashboardStore.advisorIncidentsStatus})),ti=(0,D.useSelector)((function(i){return i.DashboardStore.selectedTags})),ai=(0,D.useSelector)((function(i){return i.DashboardStore.workloads})),ei=(0,D.useSelector)((function(i){return i.DashboardStore.SID})),ni="&reports_shown=true&impacting=true&offset=0&limit=10".concat(null!=ti&&ti.length?"&tags=".concat(null==ti?void 0:ti.join()):"").concat(null!=ai&&ai.SAP?"&sap_system=true":"").concat(null!=ei&&ei.length?"&sap_sids=".concat(null==ei?void 0:ei.join()):""),ri=function(i){return"".concat(g.Pu,"/advisor/recommendations?total_risk=").concat(i).concat(ni)},li=R.map((function(i){return{name:"".concat(i.y," ").concat(i.x," "),fill:"".concat(i.fill),url:"".concat(g.Pu,"/advisor/recommendations?category=").concat(i.value).concat(ni)}}));return(0,u.useEffect)((function(){var i=z(z({},(0,v.nY)(ai,ei)),(null==ti?void 0:ti.length)>0&&{tags:ti});!function(i){U(r.$i(i))}(i),function(i){U(r.l5(i))}(i),function(i){U(r.ag(i))}(i)}),[ti,ai,ei,U]),(0,u.useEffect)((function(){if("fulfilled"===$){var i=V.total_risk,t=V.category,a=t.Stability+t.Availability+t.Performance+t.Security;Z([{title:"".concat((0,v.kC)(j.formatMessage(N.Z.critical))," "),risk:"".concat(i[g.eJ.critical]),value:g.eJ.critical},{title:"".concat((0,v.kC)(j.formatMessage(N.Z.important))," "),risk:"".concat(i[g.eJ.important]),value:g.eJ.important},{title:"".concat((0,v.kC)(j.formatMessage(N.Z.moderate))," "),risk:"".concat(i[g.eJ.moderate]),value:g.eJ.moderate},{title:"".concat((0,v.kC)(j.formatMessage(N.Z.low))," "),risk:"".concat(i[g.eJ.low]),value:g.eJ.low}]),Y([{x:j.formatMessage(N.Z.availability,{count:t.Availability}),y:t.Availability,fill:e[0],value:1},{x:j.formatMessage(N.Z.stability,{count:t.Stability}),y:t.Stability,fill:e[1],value:3},{x:j.formatMessage(N.Z.performance,{count:t.Performance}),y:t.Performance,fill:e[2],value:4},{x:j.formatMessage(N.Z.security,{count:t.Security}),y:t.Security,fill:e[3],value:2}]),Q(0===a?[B.J.value]:e)}}),[V,$]),h().createElement(y.M,{className:"ins-c-dashboard-card-parent ins-c-dashboard__card--compound--Advisor"},"pending"===ii||"pending"===$&&h().createElement(T.Z,null),"rejected"===ii?h().createElement(S.jA,null,h().createElement(W.Z,{appName:"Advisor"})):h().createElement(h().Fragment,null,h().createElement(k.t,{appName:"Advisor",className:"ins-m-toggle-right-on-md",title:j.formatMessage(N.Z.advisorCardHeader1),isExpanded:JSON.parse(localStorage.getItem("dashboard_expanded_advisor1")||"true"),isExpandedCallback:function(i){return localStorage.setItem("dashboard_expanded_advisor1",i)},body:h().createElement(S.jA,{className:"ins-c-advisor-recs__card-body pf-u-pb-2xl"},h().createElement(C.k,{direction:{default:"column"},alignItems:{default:"alignItemsCenter"}},h().createElement(f.B,null,h().createElement(C.k,{alignItems:{default:"alignItemsFlexCenter"},justifyContent:{default:"justifyContentCenter"}},(null==X||null===(i=X.meta)||void 0===i?void 0:i.count)>0&&h().createElement(M.ZP,{className:"pf-u-font-size-xl pf-u-warning-color-100"}),h().createElement("span",{className:"pf-u-font-size-2xl pf-u-text-align-center pf-u-font-weight-normal"},j.formatMessage(N.Z.incidents,{incidents:null==X||null===(t=X.meta)||void 0===t?void 0:t.count}))),h().createElement(s.D,{className:"ins-c-width-limiter pf-u-text-align-center",style:{"--ins-c-width-limiter--MaxWidth":"34ch"}},h().createElement("p",{className:"pf-u-font-size-sm"},j.formatMessage(N.Z.advisorCardMessage)))),h().createElement(o.zx,{variant:"secondary",isSmall:!0,component:"a",href:"".concat(g.Pu).concat("/advisor/recommendations?reports_shown=true&impacting=true&offset=0&limit=10&sort=-publish_date&incident=true")},j.formatMessage(N.Z.advisorCardCTA))))}),h().createElement(d.i,{inset:{md:"insetLg"}}),h().createElement(k.t,{appName:"advisor-recommendation-by-total-risk",className:"ins-m-toggle-right-on-md",title:h().createElement(C.k,{flexWrap:{default:"nowrap"}},j.formatMessage(N.Z.advisorCardHeader2),(a=j.formatMessage(N.Z.totalRiskDef,{em:function(i){return h().createElement("em",null,i)}}),h().createElement(l.u,{key:a,position:l.D.top,content:h().createElement("div",null,a)},h().createElement(o.zx,{variant:"plain","aria-label":"Action",className:"ins-c-info-icon"},h().createElement(G.Z,null))))),isExpanded:JSON.parse(localStorage.getItem("dashboard_expanded_advisor2")||"true"),isExpandedCallback:function(i){return localStorage.setItem("dashboard_expanded_advisor2",i)},body:h().createElement(S.jA,{className:"ins-c-advisor-recs__card-body pf-u-pb-0"},h().createElement(C.k,{justifyContent:{default:"justifyContentCenter"},spaceItems:{default:"spaceItems3xl"}},q.map((function(i){var t=i.title,a=i.risk,e=i.value;return h().createElement("a",{key:t,href:ri(e)},h().createElement(C.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsNone"},alignItems:{default:"alignItemsCenter"}},h().createElement("span",{className:"pf-u-font-size-2xl pf-u-color-100 pf-u-font-weight-normal"},a),h().createElement("span",{className:"pf-u-font-size-sm"},t)))}))),h().createElement(m.Z,{component:"div"},h().createElement(c.l,null,h().createElement(A.D,{headingLevel:"h4",size:"lg"},j.formatMessage(N.Z.advisorCardHeader3))),h().createElement(p.e,{className:"pf-u-pt-sm"},h().createElement(C.k,{direction:{default:"column"},spaceItems:{default:"spaceItemsLg"}},h().createElement(C.k,{alignItems:{default:"alignItemsCenter"},spaceItems:{default:"spaceItemsXl"}},h().createElement(f.B,null,h().createElement(E.u,{ariaDesc:"Advisor Category pie chart",ariaTitle:"Advisor Category pie chartt",constrainToVisibleArea:!0,data:R,colorScale:H,padding:{bottom:0,left:0,right:0,top:0},height:100,width:100})),h().createElement("div",{className:"ins-c-legend"},li.map((function(i){return h().createElement("a",{key:i.url,href:i.url,className:"ins-c-legend__item"},h().createElement("span",{className:"ins-c-legend__dot",style:{"--ins-c-legend__dot--BackgroundColor":"".concat(i.fill)}}),h().createElement("span",{className:"ins-c-legend__text"},i.name))}))))))))})))}},32796:(i,t,a)=>{"use strict";var e=a(93379),n=a.n(e),r=a(29849),l=n()(r.default,{insert:"head",singleton:!1});if(!r.default.locals||i.hot.invalidate){var o=r.default.locals;i.hot.accept(29849,(t=>{r=a(29849),function(i,t,a){if(!i&&t||i&&!t)return!1;var e;for(e in i)if(i[e]!==t[e])return!1;for(e in t)if(!i[e])return!1;return!0}(o,r.default.locals)?(o=r.default.locals,l(r.default)):i.hot.invalidate()}))}i.hot.dispose((function(){l()})),r.default.locals}}]);
//# sourceMappingURL=1603.1f198a0d023054faa22a.js.map