'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-intro documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-42d8186fb6f9796c993abf9e52dcfb05e6a5188682d71010c61ae479665cb4a9fe4aa66159a91cd67eb1fffd5fb10ba09cd6f3aa2cb4b0b903414c6b04bc2813"' : 'data-bs-target="#xs-controllers-links-module-AppModule-42d8186fb6f9796c993abf9e52dcfb05e6a5188682d71010c61ae479665cb4a9fe4aa66159a91cd67eb1fffd5fb10ba09cd6f3aa2cb4b0b903414c6b04bc2813"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-42d8186fb6f9796c993abf9e52dcfb05e6a5188682d71010c61ae479665cb4a9fe4aa66159a91cd67eb1fffd5fb10ba09cd6f3aa2cb4b0b903414c6b04bc2813"' :
                                            'id="xs-controllers-links-module-AppModule-42d8186fb6f9796c993abf9e52dcfb05e6a5188682d71010c61ae479665cb4a9fe4aa66159a91cd67eb1fffd5fb10ba09cd6f3aa2cb4b0b903414c6b04bc2813"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-42d8186fb6f9796c993abf9e52dcfb05e6a5188682d71010c61ae479665cb4a9fe4aa66159a91cd67eb1fffd5fb10ba09cd6f3aa2cb4b0b903414c6b04bc2813"' : 'data-bs-target="#xs-injectables-links-module-AppModule-42d8186fb6f9796c993abf9e52dcfb05e6a5188682d71010c61ae479665cb4a9fe4aa66159a91cd67eb1fffd5fb10ba09cd6f3aa2cb4b0b903414c6b04bc2813"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-42d8186fb6f9796c993abf9e52dcfb05e6a5188682d71010c61ae479665cb4a9fe4aa66159a91cd67eb1fffd5fb10ba09cd6f3aa2cb4b0b903414c6b04bc2813"' :
                                        'id="xs-injectables-links-module-AppModule-42d8186fb6f9796c993abf9e52dcfb05e6a5188682d71010c61ae479665cb4a9fe4aa66159a91cd67eb1fffd5fb10ba09cd6f3aa2cb4b0b903414c6b04bc2813"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-8c856960ddeadf49cd0b107107d493fbb8c2f21e6d1f5bc657d3557d75ab5ec137811d8627f71172595e4b41bd0819912ee84985833f840e6ffe166aa43b06f3"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-8c856960ddeadf49cd0b107107d493fbb8c2f21e6d1f5bc657d3557d75ab5ec137811d8627f71172595e4b41bd0819912ee84985833f840e6ffe166aa43b06f3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-8c856960ddeadf49cd0b107107d493fbb8c2f21e6d1f5bc657d3557d75ab5ec137811d8627f71172595e4b41bd0819912ee84985833f840e6ffe166aa43b06f3"' :
                                            'id="xs-controllers-links-module-AuthModule-8c856960ddeadf49cd0b107107d493fbb8c2f21e6d1f5bc657d3557d75ab5ec137811d8627f71172595e4b41bd0819912ee84985833f840e6ffe166aa43b06f3"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/GoogleAuthenticationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GoogleAuthenticationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-8c856960ddeadf49cd0b107107d493fbb8c2f21e6d1f5bc657d3557d75ab5ec137811d8627f71172595e4b41bd0819912ee84985833f840e6ffe166aa43b06f3"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-8c856960ddeadf49cd0b107107d493fbb8c2f21e6d1f5bc657d3557d75ab5ec137811d8627f71172595e4b41bd0819912ee84985833f840e6ffe166aa43b06f3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-8c856960ddeadf49cd0b107107d493fbb8c2f21e6d1f5bc657d3557d75ab5ec137811d8627f71172595e4b41bd0819912ee84985833f840e6ffe166aa43b06f3"' :
                                        'id="xs-injectables-links-module-AuthModule-8c856960ddeadf49cd0b107107d493fbb8c2f21e6d1f5bc657d3557d75ab5ec137811d8627f71172595e4b41bd0819912ee84985833f840e6ffe166aa43b06f3"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GenerateTokensProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenerateTokensProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GoogleAuthenticationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GoogleAuthenticationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RefreshTokensProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RefreshTokensProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SignInProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignInProvider</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MailModule.html" data-type="entity-link" >MailModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MailModule-d7adbcb0f31b8f8b0d57016fc70432ac4ab14d24e759197a72cfcfde246478bc86b909bfdfdcc31ad0a031b9a62eac03a38ec37e7afa217764c7c1dc830c9d50"' : 'data-bs-target="#xs-injectables-links-module-MailModule-d7adbcb0f31b8f8b0d57016fc70432ac4ab14d24e759197a72cfcfde246478bc86b909bfdfdcc31ad0a031b9a62eac03a38ec37e7afa217764c7c1dc830c9d50"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MailModule-d7adbcb0f31b8f8b0d57016fc70432ac4ab14d24e759197a72cfcfde246478bc86b909bfdfdcc31ad0a031b9a62eac03a38ec37e7afa217764c7c1dc830c9d50"' :
                                        'id="xs-injectables-links-module-MailModule-d7adbcb0f31b8f8b0d57016fc70432ac4ab14d24e759197a72cfcfde246478bc86b909bfdfdcc31ad0a031b9a62eac03a38ec37e7afa217764c7c1dc830c9d50"' }>
                                        <li class="link">
                                            <a href="injectables/MailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MetaOptionsModule.html" data-type="entity-link" >MetaOptionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MetaOptionsModule-89cea5e9860db67e2b0d1038281c57e6512b3f16e8b48ad6a50fc22c099286926a0b0ccb9302a152040e869d4f9545bed9d2de8903160467af7f77c9d6f46192"' : 'data-bs-target="#xs-controllers-links-module-MetaOptionsModule-89cea5e9860db67e2b0d1038281c57e6512b3f16e8b48ad6a50fc22c099286926a0b0ccb9302a152040e869d4f9545bed9d2de8903160467af7f77c9d6f46192"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MetaOptionsModule-89cea5e9860db67e2b0d1038281c57e6512b3f16e8b48ad6a50fc22c099286926a0b0ccb9302a152040e869d4f9545bed9d2de8903160467af7f77c9d6f46192"' :
                                            'id="xs-controllers-links-module-MetaOptionsModule-89cea5e9860db67e2b0d1038281c57e6512b3f16e8b48ad6a50fc22c099286926a0b0ccb9302a152040e869d4f9545bed9d2de8903160467af7f77c9d6f46192"' }>
                                            <li class="link">
                                                <a href="controllers/MetaOptionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MetaOptionsModule-89cea5e9860db67e2b0d1038281c57e6512b3f16e8b48ad6a50fc22c099286926a0b0ccb9302a152040e869d4f9545bed9d2de8903160467af7f77c9d6f46192"' : 'data-bs-target="#xs-injectables-links-module-MetaOptionsModule-89cea5e9860db67e2b0d1038281c57e6512b3f16e8b48ad6a50fc22c099286926a0b0ccb9302a152040e869d4f9545bed9d2de8903160467af7f77c9d6f46192"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MetaOptionsModule-89cea5e9860db67e2b0d1038281c57e6512b3f16e8b48ad6a50fc22c099286926a0b0ccb9302a152040e869d4f9545bed9d2de8903160467af7f77c9d6f46192"' :
                                        'id="xs-injectables-links-module-MetaOptionsModule-89cea5e9860db67e2b0d1038281c57e6512b3f16e8b48ad6a50fc22c099286926a0b0ccb9302a152040e869d4f9545bed9d2de8903160467af7f77c9d6f46192"' }>
                                        <li class="link">
                                            <a href="injectables/MetaOptionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PaginationModule.html" data-type="entity-link" >PaginationModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PaginationModule-c999ec83fa446b9ea19d24ee0a6e56c581d86a5632cf36ae10c29d023d3c04796a0ed53a4d793419d8e1b10f6bd03438e096eafb9c8ddd56a9755c3470044f4b"' : 'data-bs-target="#xs-injectables-links-module-PaginationModule-c999ec83fa446b9ea19d24ee0a6e56c581d86a5632cf36ae10c29d023d3c04796a0ed53a4d793419d8e1b10f6bd03438e096eafb9c8ddd56a9755c3470044f4b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PaginationModule-c999ec83fa446b9ea19d24ee0a6e56c581d86a5632cf36ae10c29d023d3c04796a0ed53a4d793419d8e1b10f6bd03438e096eafb9c8ddd56a9755c3470044f4b"' :
                                        'id="xs-injectables-links-module-PaginationModule-c999ec83fa446b9ea19d24ee0a6e56c581d86a5632cf36ae10c29d023d3c04796a0ed53a4d793419d8e1b10f6bd03438e096eafb9c8ddd56a9755c3470044f4b"' }>
                                        <li class="link">
                                            <a href="injectables/PaginationProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaginationProvider</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-cb0b6b294de2e15870ad0ed14dea1cebac0472a8cb05907f50cd8c0d7d7b4a1daa9792aeb1a9139ec0045aedc1b535a558740456af137fd8c02e5f95666687c8"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-cb0b6b294de2e15870ad0ed14dea1cebac0472a8cb05907f50cd8c0d7d7b4a1daa9792aeb1a9139ec0045aedc1b535a558740456af137fd8c02e5f95666687c8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-cb0b6b294de2e15870ad0ed14dea1cebac0472a8cb05907f50cd8c0d7d7b4a1daa9792aeb1a9139ec0045aedc1b535a558740456af137fd8c02e5f95666687c8"' :
                                            'id="xs-controllers-links-module-PostsModule-cb0b6b294de2e15870ad0ed14dea1cebac0472a8cb05907f50cd8c0d7d7b4a1daa9792aeb1a9139ec0045aedc1b535a558740456af137fd8c02e5f95666687c8"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-cb0b6b294de2e15870ad0ed14dea1cebac0472a8cb05907f50cd8c0d7d7b4a1daa9792aeb1a9139ec0045aedc1b535a558740456af137fd8c02e5f95666687c8"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-cb0b6b294de2e15870ad0ed14dea1cebac0472a8cb05907f50cd8c0d7d7b4a1daa9792aeb1a9139ec0045aedc1b535a558740456af137fd8c02e5f95666687c8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-cb0b6b294de2e15870ad0ed14dea1cebac0472a8cb05907f50cd8c0d7d7b4a1daa9792aeb1a9139ec0045aedc1b535a558740456af137fd8c02e5f95666687c8"' :
                                        'id="xs-injectables-links-module-PostsModule-cb0b6b294de2e15870ad0ed14dea1cebac0472a8cb05907f50cd8c0d7d7b4a1daa9792aeb1a9139ec0045aedc1b535a558740456af137fd8c02e5f95666687c8"' }>
                                        <li class="link">
                                            <a href="injectables/CreatePostProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreatePostProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TagsModule.html" data-type="entity-link" >TagsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TagsModule-cb34d2486d55ce5d4b62c69569f66b5725d73d97b40eb4f028ca5201e94897a3c961d643e521008e58756359162a76103197472eafce3f12e7e2d7f6f742d0a7"' : 'data-bs-target="#xs-controllers-links-module-TagsModule-cb34d2486d55ce5d4b62c69569f66b5725d73d97b40eb4f028ca5201e94897a3c961d643e521008e58756359162a76103197472eafce3f12e7e2d7f6f742d0a7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TagsModule-cb34d2486d55ce5d4b62c69569f66b5725d73d97b40eb4f028ca5201e94897a3c961d643e521008e58756359162a76103197472eafce3f12e7e2d7f6f742d0a7"' :
                                            'id="xs-controllers-links-module-TagsModule-cb34d2486d55ce5d4b62c69569f66b5725d73d97b40eb4f028ca5201e94897a3c961d643e521008e58756359162a76103197472eafce3f12e7e2d7f6f742d0a7"' }>
                                            <li class="link">
                                                <a href="controllers/TagsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TagsModule-cb34d2486d55ce5d4b62c69569f66b5725d73d97b40eb4f028ca5201e94897a3c961d643e521008e58756359162a76103197472eafce3f12e7e2d7f6f742d0a7"' : 'data-bs-target="#xs-injectables-links-module-TagsModule-cb34d2486d55ce5d4b62c69569f66b5725d73d97b40eb4f028ca5201e94897a3c961d643e521008e58756359162a76103197472eafce3f12e7e2d7f6f742d0a7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TagsModule-cb34d2486d55ce5d4b62c69569f66b5725d73d97b40eb4f028ca5201e94897a3c961d643e521008e58756359162a76103197472eafce3f12e7e2d7f6f742d0a7"' :
                                        'id="xs-injectables-links-module-TagsModule-cb34d2486d55ce5d4b62c69569f66b5725d73d97b40eb4f028ca5201e94897a3c961d643e521008e58756359162a76103197472eafce3f12e7e2d7f6f742d0a7"' }>
                                        <li class="link">
                                            <a href="injectables/TagsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UploadsModule.html" data-type="entity-link" >UploadsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UploadsModule-708cac685cc0e894e88f75b21414d379b69a7258502bfe5e197250780916e0b0f6390b6ff7560ce1f8c0c8eedd7df75f86b5f6d6fc870a0d1949e710502237d0"' : 'data-bs-target="#xs-controllers-links-module-UploadsModule-708cac685cc0e894e88f75b21414d379b69a7258502bfe5e197250780916e0b0f6390b6ff7560ce1f8c0c8eedd7df75f86b5f6d6fc870a0d1949e710502237d0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UploadsModule-708cac685cc0e894e88f75b21414d379b69a7258502bfe5e197250780916e0b0f6390b6ff7560ce1f8c0c8eedd7df75f86b5f6d6fc870a0d1949e710502237d0"' :
                                            'id="xs-controllers-links-module-UploadsModule-708cac685cc0e894e88f75b21414d379b69a7258502bfe5e197250780916e0b0f6390b6ff7560ce1f8c0c8eedd7df75f86b5f6d6fc870a0d1949e710502237d0"' }>
                                            <li class="link">
                                                <a href="controllers/UploadsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploadsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UploadsModule-708cac685cc0e894e88f75b21414d379b69a7258502bfe5e197250780916e0b0f6390b6ff7560ce1f8c0c8eedd7df75f86b5f6d6fc870a0d1949e710502237d0"' : 'data-bs-target="#xs-injectables-links-module-UploadsModule-708cac685cc0e894e88f75b21414d379b69a7258502bfe5e197250780916e0b0f6390b6ff7560ce1f8c0c8eedd7df75f86b5f6d6fc870a0d1949e710502237d0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UploadsModule-708cac685cc0e894e88f75b21414d379b69a7258502bfe5e197250780916e0b0f6390b6ff7560ce1f8c0c8eedd7df75f86b5f6d6fc870a0d1949e710502237d0"' :
                                        'id="xs-injectables-links-module-UploadsModule-708cac685cc0e894e88f75b21414d379b69a7258502bfe5e197250780916e0b0f6390b6ff7560ce1f8c0c8eedd7df75f86b5f6d6fc870a0d1949e710502237d0"' }>
                                        <li class="link">
                                            <a href="injectables/UploadToAwsProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploadToAwsProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UploadsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploadsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-a9998b8c388a6770d19dcb0d0ae658e8c0eda0ca2fa7da1e442097253d34e6eb8e15701bf37e66e593f04d3f6e14f6d5aef7bb48a4fff05435e605fb546f9fa7"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-a9998b8c388a6770d19dcb0d0ae658e8c0eda0ca2fa7da1e442097253d34e6eb8e15701bf37e66e593f04d3f6e14f6d5aef7bb48a4fff05435e605fb546f9fa7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-a9998b8c388a6770d19dcb0d0ae658e8c0eda0ca2fa7da1e442097253d34e6eb8e15701bf37e66e593f04d3f6e14f6d5aef7bb48a4fff05435e605fb546f9fa7"' :
                                            'id="xs-controllers-links-module-UsersModule-a9998b8c388a6770d19dcb0d0ae658e8c0eda0ca2fa7da1e442097253d34e6eb8e15701bf37e66e593f04d3f6e14f6d5aef7bb48a4fff05435e605fb546f9fa7"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-a9998b8c388a6770d19dcb0d0ae658e8c0eda0ca2fa7da1e442097253d34e6eb8e15701bf37e66e593f04d3f6e14f6d5aef7bb48a4fff05435e605fb546f9fa7"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-a9998b8c388a6770d19dcb0d0ae658e8c0eda0ca2fa7da1e442097253d34e6eb8e15701bf37e66e593f04d3f6e14f6d5aef7bb48a4fff05435e605fb546f9fa7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-a9998b8c388a6770d19dcb0d0ae658e8c0eda0ca2fa7da1e442097253d34e6eb8e15701bf37e66e593f04d3f6e14f6d5aef7bb48a4fff05435e605fb546f9fa7"' :
                                        'id="xs-injectables-links-module-UsersModule-a9998b8c388a6770d19dcb0d0ae658e8c0eda0ca2fa7da1e442097253d34e6eb8e15701bf37e66e593f04d3f6e14f6d5aef7bb48a4fff05435e605fb546f9fa7"' }>
                                        <li class="link">
                                            <a href="injectables/CreateGoogleUserProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateGoogleUserProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CreateUserProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateUserProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FindOneByGoogleIdProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FindOneByGoogleIdProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FindOneUserByEmailProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FindOneUserByEmailProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersCreateManyProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersCreateManyProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/MetaOption.html" data-type="entity-link" >MetaOption</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Post.html" data-type="entity-link" >Post</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Tag.html" data-type="entity-link" >Tag</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Upload.html" data-type="entity-link" >Upload</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateManyUsersDto.html" data-type="entity-link" >CreateManyUsersDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTagDto.html" data-type="entity-link" >CreateTagDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetPostsBaseDto.html" data-type="entity-link" >GetPostsBaseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetPostsDto.html" data-type="entity-link" >GetPostsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GoogleTokenDto.html" data-type="entity-link" >GoogleTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginationQueryDto.html" data-type="entity-link" >PaginationQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RefreshTokenDto.html" data-type="entity-link" >RefreshTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignInDto.html" data-type="entity-link" >SignInDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/BcryptProvider.html" data-type="entity-link" >BcryptProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataResponseInterceptor.html" data-type="entity-link" >DataResponseInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HashingProvider.html" data-type="entity-link" >HashingProvider</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AccessTokenGuard.html" data-type="entity-link" >AccessTokenGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthenticationGuard.html" data-type="entity-link" >AuthenticationGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ActiveUserData.html" data-type="entity-link" >ActiveUserData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GoogleUser.html" data-type="entity-link" >GoogleUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Paginated.html" data-type="entity-link" >Paginated</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UploadFile.html" data-type="entity-link" >UploadFile</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});