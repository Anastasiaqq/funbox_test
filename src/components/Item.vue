<template>
    <div class="item" :class="selected ? 'selected-border' : ''">
        <div class="item__card" @click="e => selectHandler(e)" >
            <div class="border noevent"></div>

            <div class="item__container noevent">
                <p class="item__slogan noevent">Сказочное заморское яство</p>
                <h2 class="item__head noevent">Нямушка</h2>
                <p class="item__contents noevent">{{ contents }}</p>
                <!-- <p class="item__presents" v-html="presents"></p> -->
                <ul class="item__presents_list noevent">
                    <li class="item__presents_item noevent" v-for="p in presents" :key="p">{{ p }}</li>
                </ul>
            </div>
            <img class="item__img noevent" :src="cat" alt="изображение кота">
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
        }
    },
    data() {
        return {
            cat: require('@/assets/img/kote.png'),
            selected: false
        }
    },
    methods: {
        selectHandler(e) { //do i need a counter here or unbind in updated or what
            // e.target.classList.remove('noevent');
            e.target.onmouseleave = () => {
                this.selected = !this.selected;
                // e.target.classList.add('noevent');
                return;
            }
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
            this.selected ? string = this.desc : string = 'Чего сидишь? Порадуй котэ, <button class="buy">купи.</button>';
            return string;
        }
    }
}
</script>