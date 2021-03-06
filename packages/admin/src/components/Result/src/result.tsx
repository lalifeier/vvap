import { useDesign } from '@/hooks/web/useDesign'
import { defineComponent, ExtractPropTypes } from 'vue'

const resultProps = {
  title: {
    type: String,
    default: '',
  },
  subTitle: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
}

export type ResultProps = ExtractPropTypes<typeof resultProps>

export default defineComponent({
  name: 'Result',
  props: resultProps,
  setup(props, { slots }) {
    const { prefixCls } = useDesign('result')

    const renderIcon = () => {
      const { icon } = props
      return (
        (icon || slots.icon) && <div class={prefixCls + '__icon'}>{slots.icon ? slots.icon() : <img src={icon} />}</div>
      )
    }

    const renderTitle = () => {
      const { title } = props
      return (title || slots.title) && <div class={prefixCls + '__title'}>{slots.title ? slots.title() : title}</div>
    }

    const renderSubTitle = () => {
      const { subTitle } = props
      return (
        (subTitle || slots.subTitle) && (
          <div class={prefixCls + '__subtitle'}>{slots.subTitle ? slots.subTitle() : subTitle}</div>
        )
      )
    }

    const renderExtra = () => slots.extra && <div class={prefixCls + '__extra'}>{slots.extra()}</div>

    return () => (
      <div class={prefixCls}>
        {renderIcon()}
        {renderTitle()}
        {renderSubTitle()}
        {renderExtra()}
      </div>
    )
  },
})
