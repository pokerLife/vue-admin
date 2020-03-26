import development from '@/config/development.config'
import production from '@/config/production.config'

/**
 * 项目全局配置
 * 全局绑定到Vue根示例，用法this.$config
 */

let config = {}
if (process.env.NODE_ENV === 'production') {
  config = production
} else {
  config = development
}

export default config
