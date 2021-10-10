import { Player } from './index'

export const serializers = {
  types: {
    youtube: (props: any) => {
      const { node } = props
      return <Player url={node.url} title={node.title} />
    },
  },
}

export const mdserializers = {
  types: {
    youtube: (props: any) => {
      const { node } = props
      return `[${node.title}](${node.url} "${node.title}")`
    },
  },
}
