<template>
    <div class="sidebar" :class="isOpened ? 'open' : ''" :style="cssVars">
        <div class="logo-details" style="margin: 6px 14px 0 14px;">
            <img v-if="menuLogo" :src="menuLogo" alt="menu-logo" class="menu-logo icon">
            <i v-else class="bx icon" :class="menuIcon" />
            <div class="logo_name">
                {{ menuTitle }}
            </div>
            <i class="bx" :class="isOpened ? 'bx-menu-alt-right' : 'bx-menu'" id="btn" @click="isOpened = !isOpened" />
        </div>

        <div
            style="display: flex ; flex-direction:column; justify-content: space-between; flex-grow: 1; max-height: calc(100% - 60px); ">
            <div id="my-scroll" style="margin: 6px 14px 0 14px;">
                <ul class="nav-list" style="overflow: visible;">


                    <span v-for="(menuItem, index) in menuItems" :key="index">
                        <li>
                            <a :href="menuItem.link">
                                <i class="bx" :class="menuItem.icon || 'bx-square-rounded'" />
                                <span class="links_name">{{ menuItem.name }}</span>
                            </a>
                            <span class="tooltip">{{ menuItem.tooltip || menuItem.name }}</span>
                        </li>
                    </span>
                </ul>
            </div>


        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    props: {
        //! Menu settings
        isMenuOpen: {
            type: Boolean,
            default: false,
        },
        menuTitle: {
            type: String,
            default: 'Vuega',
        },
        menuLogo: {
            type: String,
            default: '',
        },
        menuIcon: {
            type: String,
            default: 'bxl-python',
        },
        isPaddingLeft: {
            type: Boolean,
            default: true,
        },
        menuOpenedPaddingLeftBody: {
            type: String,
            default: '250px'
        },
        menuClosedPaddingLeftBody: {
            type: String,
            default: '78px'
        },
        //! Menu items
        menuItems: {
            type: Array,
            default: () => [
                {
                    link: 'dashboard',
                    name: 'Dashboard',
                    tooltip: 'Dashboard',
                    icon: 'bx-grid-alt',
                },
                {
                    link: 'test_runner',
                    name: 'Test runner',
                    tooltip: 'Test runner',
                    icon: 'bxs-flask',
                },

                {
                    link: 'docs',
                    name: 'Docs',
                    tooltip: 'Docs',
                    icon: 'bx-file',
                },
                {
                    link: '#',
                    name: 'Analytics',
                    tooltip: 'Analytics',
                    icon: 'bx-pie-chart-alt-2',
                },
                {
                    link: 'files',
                    name: 'File Manager',
                    tooltip: 'Files',
                    icon: 'bx-folder',
                },


                {
                    link: 'configs',
                    name: 'Configs',
                    tooltip: 'Configs',
                    icon: 'bx-cog',
                },
            ],
        },

        //! Styles
        bgColor: {
            type: String,
            default: '#192A39',
        },
        secondaryColor: {
            type: String,
            default: '#554f8d',
        },
        homeSectionColor: {
            type: String,
            default: '#5ed6ca',
        },
        logoTitleColor: {
            type: String,
            default: 'rgb(98, 167, 245)',
        },
        iconsColor: {
            type: String,
            default: '#192A39',
        },
        itemsTooltipColor: {
            type: String,
            default: '#a2fad7',
        },

        menuItemsHoverColor: {
            type: String,
            default: 'rgb(59, 102, 150)',
        },
        menuItemsTextColor: {
            type: String,
            default: '#192A39',
        },
        menuFooterTextColor: {
            type: String,
            default: '#127e7e',
        },
    },
    data() {
        return {
            isOpened: true
        }
    },
    mounted() {
        this.isOpened = this.isMenuOpen
    },
    computed: {
        cssVars() {
            return {
                // '--padding-left-body': this.isOpened ? this.menuOpenedPaddingLeftBody : this.menuClosedPaddingLeftBody,
                '--bg-color': this.bgColor,
                '--secondary-color': this.secondaryColor,
                '--home-section-color': this.homeSectionColor,
                '--logo-title-color': this.logoTitleColor,
                '--icons-color': this.iconsColor,
                '--items-tooltip-color': this.itemsTooltipColor,
                '--menu-items-hover-color': this.menuItemsHoverColor,
                '--menu-items-text-color': this.menuItemsTextColor,
                '--menu-footer-text-color': this.menuFooterTextColor,
            }
        },
    },
    watch: {
        isOpened() {
            window.document.body.style.paddingLeft = this.isOpened && this.isPaddingLeft ? this.menuOpenedPaddingLeftBody : this.menuClosedPaddingLeftBody
        }
    }
}
</script>

<style>
/* Google Font Link */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
@import url('https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    transition: all 0.5s ease;
    background: #e9e9e9
}
                ::-webkit-scrollbar {
                    width: 7px;
        
                }
        
                /* Track */
                ::-webkit-scrollbar-track {
                    box-shadow: inset 0 0 5px grey;
                    border-radius: 10px;
                }
        
                /* Handle */
                ::-webkit-scrollbar-thumb {
                    background: rgb(98, 167, 245);
                    border-radius: 5px;
                }

.menu-logo {
    width: 30px;
    margin: 0 10px 0 10px;
}

.sidebar {
    position: relative;
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    box-shadow: 6px 0px 7px -5px rgba(0, 0, 0, 0.349);
    top: 0;
    height: 100%;
    min-height: min-content;
    /* overflow-y: auto; */
    width: 78px;
    background: var(--bg-color);
    /* padding: 6px 14px 0 14px; */
    z-index: 99;
    transition: all 0.5s ease;
}

.sidebar.open {
    width: 250px;
}

.sidebar .logo-details {
    color: var(--logo-title-color);
    height: 60px;
    display: flex;
    align-items: center;
    position: relative;
}

.sidebar .logo-details .icon {
    color: var(--logo-title-color);
    opacity: 0;
    transition: all 0.5s ease;
}

.sidebar .logo-details .logo_name {
    color: var(--logo-title-color);
    font-size: 20px;
    font-weight: 600;
    opacity: 0;
    transition: all 0.5s ease;
}

.sidebar.open .logo-details .icon,
.sidebar.open .logo-details .logo_name {
    opacity: 1;
}

.sidebar .logo-details #btn {
    color: var(--logo-title-color);
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    font-size: 22px;
    transition: all 0.4s ease;
    font-size: 23px;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s ease;
}

.sidebar.open .logo-details #btn {
    text-align: right;
}

.sidebar i {
    color: var(--icons-color);
    height: 60px;
    min-width: 50px;
    font-size: 28px;
    text-align: center;
    line-height: 60px;
}

.sidebar .nav-list {
    margin-top: 20px;
    /* margin-bottom: 60px; */
    /* height: 100%; */
    /* min-height: min-content; */
}

.sidebar li {
    position: relative;
    margin: 20px 0;
    list-style: none;
        border-radius: 24px
}

.sidebar li .tooltip {
    position: absolute;
    top: -20px;
    left: calc(100% + 15px);
    z-index: 3;
    background: var(--items-tooltip-color);
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 15px;
    font-weight: 400;
    opacity: 0;
    white-space: nowrap;
    pointer-events: none;
    transition: 0s;
}

.sidebar li:hover .tooltip {
    opacity: 1;
    pointer-events: auto;
    transition: all 0.4s ease;
    top: 50%;
    transform: translateY(-50%);
}

.sidebar.open li .tooltip {
    display: none;
}

.sidebar input {
    font-size: 15px;
    color: var(--serach-input-text-color);
    font-weight: 400;
    outline: none;
    height: 50px;
    width: 100%;
    width: 50px;
    border: none;
    border-radius: 12px;
    transition: all 0.5s ease;
    background: var(--secondary-color);
}

.sidebar.open input {
    padding: 0 20px 0 50px;
    width: 100%;
}



.sidebar li a {
    display: flex;
    height: 100%;
    width: 100%;
    border-radius: 25px;
        margin-bottom: 25px;
    align-items: center;
    background: rgb(98, 167, 245) !important;
    text-decoration: none;
    transition: all 0.4s ease;
    background: var(--bg-color);
}

.sidebar li a:hover {
    background: var(--menu-items-hover-color) !important;
}

.sidebar li a .links_name {
    color: var(--menu-items-text-color);
    font-size: 15px;
    font-weight: 400;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: 0.4s;
}

.sidebar.open li a .links_name {
    opacity: 1;
    pointer-events: auto;
}

.sidebar li a:hover .links_name,
.sidebar li a:hover i {
    transition: all 0.5s ease;
    color: var(--logo-title-color);
}

.sidebar li i {
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    border-radius: 12px;
}



.sidebar div img {
    height: 45px;
    width: 45px;
    object-fit: cover;
    border-radius: 6px;
    margin-right: 10px;
}


.home-section {
    position: relative;
    background: var(--home-section-color);
    min-height: 100vh;
    top: 0;
    left: 78px;
    width: calc(100% - 78px);
    transition: all 0.5s ease;
    z-index: 2;
}

.sidebar.open~.home-section {
    left: 250px;
    width: calc(100% - 250px);
}

.home-section .text {
    display: inline-block;
    color: var(--bg-color);
    font-size: 25px;
    font-weight: 500;
    margin: 18px;
}

.my-scroll-active {
    overflow-y: auto;
}

#my-scroll {
    overflow-y: auto;
    height: calc(100% - 60px);
}

#my-scroll::-webkit-scrollbar {
    display: none;
    /* background-color: rgba(255, 255, 255, 0.2); 
    width: 10px;
    border-radius:5px  */
}

/* #my-scroll::-webkit-scrollbar-thumb{
    background-color: red;
    border-radius:5px 
  }
  #my-scroll::-webkit-scrollbar-button:vertical:start:decrement{
    display:none;
  }
  #my-scroll::-webkit-scrollbar-button:vertical:end:increment{
    display:none;
  } */
@media (max-width: 420px) {
    .sidebar li .tooltip {
        display: none;
    }
}
</style>