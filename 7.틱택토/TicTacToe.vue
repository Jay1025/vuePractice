<template>
    <div>
        <div>{{ turn }}님의 턴입니다.</div>
        <table-component :table-data="tableData" :turn="turn" />
        <div v-if="winner">{{ winner }}님의 승리</div>
    </div>
</template>

<script>
import TableComponent from './TableComponent';
export default {
    components: {
        TableComponent,
    },
    data() {
        return {
            tableData: [
                ['', '', ''],
                ['', '', ''],
                ['', '', ''],
            ],
            turn: 'O',
            winner: '',
        };
    },
    methods: {
        onChangeData() {
            //this.tableData[1][0] = 'X'; 작동하지 않음
            //배열에서 index를 사용할때 this.$set사용해야 한다.
            this.$set(this.tableData[1], 0, 'X'); // Vue.set과 동일 (마찬가지로 객체로 key로 값을 바꾸는 경우 동작하지 않아 this.$set을 해줘야 한다.)
        },
    },
};
</script>

<style>
table {
    border-collapse: collapse;
}
td {
    border: 1px solid black;
    width: 40px;
    height: 40px;
    text-align: center;
}
</style>
