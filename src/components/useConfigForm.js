import { defineComponent, h, resolveComponent } from "vue";
// import { Form } from 'ant-design-vue'

export default defineComponent({
    name: 'config-table-form',
    props: {
        config: { type: Array },
        model: { type: Object }
    },
    setup(props, { slots, emit }){
        const form = resolveComponent('a-form')
        const formItems = [];
        const { config, model } = props;
        
        config.forEach(item => {
            formItems.push(
                h(resolveComponent(item.tag), { label: item.label, }, [
                    h(resolveComponent(`a-${item.type}`), { placeholder: item.label, value: model[item.model], on: {
                        change: event => {
                            console.log('event', event)
                            emit('input', event.target.value)
                        }
                        }
                    },  )
                ])
            )
        })
        
        return () => h(form, { layout: 'inline'}, formItems)
    }
})