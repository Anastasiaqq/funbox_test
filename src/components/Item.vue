<template>
    <div class="item" :class="myClass">
        <div class="item__card" @click="e => selectHandler(e)" >
            <div class="border noevent"></div>

            <div class="item__container noevent">
                <p class="item__slogan noevent">Сказочное заморское яство</p>
                <h2 class="item__head noevent">Нямушка</h2>
                <p class="item__contents noevent">{{ contents }}</p>
                <ul class="item__presents_list noevent">
                    <li class="item__presents_item noevent" v-for="p in presents" :key="p">{{ p }}</li>
                </ul>
            </div>
            <img class="item__img noevent" :src="cat" alt="изображение пушистого кота голубого окраса">
            <div class="item__weight noevent">
                <p class="number noevent">{{ weight }}</p>
                <p class="kilo noevent">кг</p>
            </div>
        </div>
        <p class="item__desc" v-html="description"></p>
    </div>
</template>

<script>
export default {
    name: 'Item',
    props: {
        contents: {
            type: String,
            default: ''
        },
        weight: {
            type: String,
            default: '0,5'
        },
        presents: {
            default: []
        },
        desc: {
            type: String,
            default:''
        },
        active: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            cat: require('@/assets/img/kote.png'),
            selected: false
        }
    },
    mounted() {
        // let button = document.querySelector('.buy');
        // if(button) button.addEventListener('click', this.buttonHandler());
    },
    methods: {
        selectHandler(e) { 
            if(!this.active) return;
            e.target.onmouseleave = () => {
                this.selected = !this.selected;
                return;
            }
        },
        buttonHandler() {
            if(!this.active) return;
            this.selected = !this.selected;
        }
    },
    watch: {
        selected() {
            document.querySelector('.item__card').onmouseleave = ''
        }
    },
    computed: {
        description() {
            let string = '';
            if(!this.active) {
                string = `Печалька, ${this.contents} закончился.`
            }
            else {
                if(this.selected) {
                    string = this.desc;
                }
                else {
                    string = 'Чего сидишь? Порадуй котэ, <button class="buy">купи.</button>';
                }
            }
            return string;
        },
        myClass() {
            let cl = '';
            if(this.selected) {
                cl = 'selected-border';
            }
            else if(!this.active) {
                cl = 'inactive';
            }
            return cl;
        }
    }
}
</script>