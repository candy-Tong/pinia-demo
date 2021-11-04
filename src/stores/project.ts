import {defineStore} from 'pinia';
import {shallowRef} from 'vue';
import {EdgeConfig} from '@antv/g6';
import {NodeConfig} from "@antv/g6-core/lib/types";




const useProjectStore = defineStore('graph', {
    state() {
        return {
            node: shallowRef<NodeConfig>(),
            edge: shallowRef<EdgeConfig>()
        }
    },
    actions: {
        getEdge(): EdgeConfig | undefined {
            return this.edge
        },
        getNode(): NodeConfig | undefined {
            return this.node
        }
    }

});
export {useProjectStore};
