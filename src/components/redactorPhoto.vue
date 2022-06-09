<template> 
    <div align = "center" class="container"> 
        <div class="flex"> 
            <div class="img-wrapper"> 
                <img class="img" 
                v-if="isCatVisible" 
                :class="imgFilters" 
                :style="imgSize"
                src="https://oir.mobi/uploads/posts/2021-04/1619079942_26-oir_mobi-p-yagnyonok-zhivotnie-krasivo-foto-29.jpg"> 
                <p v-else>Барашек ненадолго отошел покакать</p> 
            </div> 
            <div class="controls"> 
                <h1>Милый барашек</h1> 
                <h2>Фильтры</h2> 
                <div class="button-group"> 
                    <button class="button"
                    type="button"
                    :class="imgFilters.sepia ? 'active' : ''"
                    @click="imgFilters.sepia = !imgFilters.sepia" 
                    > 
                    Сепия 
                    </button> 
                    <button class="button"
                    type="button" 
                    :class="imgFilters.border ? 'active' : ''"
                    @click="imgFilters.border = !imgFilters.border" 
                    > 
                    Рамка 
                    </button> 
                    <button class="button"
                    type="button" 
                    :class="imgFilters.small ? 'active' : ''"
                    @click="imgFilters.small = !imgFilters.small" 
                    > 
                    Уменьшить
                    </button> 
                    <button class="button"
                    type="button"
                    :class="imgFilters.shadow ? 'active' : ''"
                    @click="imgFilters.shadow = !imgFilters.shadow">
                    Тень
                    </button>
                </div>   

                <h2>Размеры</h2>
                <div class="button-group">
                    <label>
                        Ширина: {{imgSizes.currentWidth}}
                        <input 
                        type="range"
                        :value="imgSizes.currentWidth"
                        @input="imgSizes.currentWidth = $event.target.value"
                        :min="imgSizes.minWidth"
                        :max="imgSizes.maxWidth"
                        >
                    </label>
                    <label>
                        Высота: {{imgSizes.currentHeight}}
                        <input 
                        type="range"
                        :value="imgSizes.currentHeight"
                        @input="imgSizes.currentHeight = $event.target.value"
                        :min="imgSizes.minHeight"
                        :max="imgSizes.maxHeight"
                        >
                    </label>
                 </div>    

                <div class="button-group">
                <h2>Поворот</h2>
                    <label>
                        Угол: {{rotate.value}}
                        <input 
                        type="range"
                        :value="rotate.value"
                        @input="rotate.value = $event.target.value"
                        :min="rotate.min"
                        :max="rotate.max"
                        >
                    </label>
                </div>

                <button @click="isCatVisible = !isCatVisible"> 
                <p v-if="isCatVisible">Показать</p> 
                <p v-else>Cпрятать</p>
                </button> 
            </div> 
        </div> 
    </div> 
</template> 
 
<script> 
    export default { 
        name: 'redactorPhoto', 
        data() { 
            return { 
                isCatVisible: true,
                imgFilters: {
                    sepia: false,
                    border: false,
                    small: false
                    // shadow: false
                },
                imgSizes: {
                    maxWidth: 680,
                    // minWidth: 0,
                    maxHeight: 480,
                    // minHeighth: 0,
                    currentWidth: 680,
                    currentHeight: 480,
                },
                rotate: {
                    min: 0,
                    max: 360,
                    value: 0
                }
            } 
        },
        computed: {
            imgSise() {
                return {
                    width: `${this.imgSizes.currentWidth}px`,
                    height: `${this.imgSizes.currentHeight}px`
                }
            },
            imgRotation() {
                return {
                    transform: `rotate(${this.rotate.value}deg)`  
                }
            }
        }
    } 
</script>

<style lang="scss" scoped> 
    .container { 
        margin-top: 40px; 
    } 
    .controls {
        margin-left: 20px;
    }
    .img { 
        background-color: #cecece; 
        width: 660px; 
        height: 480px; 
        transition: 0.2s ease; 
        &.sepia { 
            filter: sepia(100%); 
        } 
        &.border { 
            border: 5px dashed #464646; 
        } 
        &.small { 
            width: 160px;
            height:  120px;
        } 
        &.shadow {
            box-shadow: 0px 0px 15px 10px rgb(84, 84, 84);
        }
        
    } 
    .button {
        margin-right: 10px; 
        &.active { 
            background-color: rgb(139, 139, 139); 
            color: white;
            border: 1px solid rgb(101, 101, 101);
        } 
    } 
    h2 { 
        margin-bottom: 10px; 
    } 
    .button-group { 
        margin-bottom: 20px; 
        background-color: white;
    } 
    input[type="range"] {
    display: block;
  }


 
</style>