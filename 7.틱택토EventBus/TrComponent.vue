<template>
    <tr>
        <td-component v-for="(cellData, index) in rowData" :key="cellData + index" :cell-data="cellData" :cell-index="index" :row-index="rowIndex"></td-component>
    </tr>
</template>

<script>
import TdComponent from './TdComponent';

export default {
    components: {
        TdComponent,
    },
    data() {
        return {
            parent: '내가 니 부모다',
        };
    },
    props: {
        rowData: Array,
        rowIndex: Number,
    },
};
</script>
