<template>
    <div>
        <div>{{ turn }}님의 턴입니다.</div>
        <table-component :table-data="tableData" :turn="turn" />
        <div v-if="winner">{{ winner }}님의 승리</div>
    </div>
</template>

<script>
import TableComponent from './TableComponent';
import EventBus from './EventBus';

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
    onClickTd(rowIndex, cellIndex) {
        console.log(rowIndex, cellIndex);
        this.$set(this.tableData[rowIndex], cellIndex, this.turn);

        let win = false;
        if (this.tableData[rowIndex][0] === this.turn && this.tableData[rowIndex][1] === this.turn && this.tableData[rowIndex][2] === this.turn) {
            win = true; //가로
        }
        if (this.tableData[0][cellIndex] === this.turn && this.tableData[1][cellIndex] === this.turn && this.tableData[2][cellIndex] === this.turn) {
            win = true; //세로
        }
        if (this.tableData[0][0] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][2] === this.turn) {
            win = true; //대각선(1)
        }
        if (this.tableData[0][2] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][0] === this.turn) {
            win = true; //대각선(2)
        }

        if (win) {
            //이긴 경우: 3줄 달성
            this.winner = this.turn;
            this.turn = 'O';
            this.tableData = [
                ['', '', ''],
                ['', '', ''],
                ['', '', ''],
            ];
        } else {
            //지거나 무승부
            let all = true; //all의 true면 무승부라는 뜻
            this.tableData.forEach((row) => {
                //무승부 검사
                row.forEach((cell) => {
                    if (!cell) {
                        all = false;
                    }
                });
            });
            if (all) {
                //무승부
                this.winner = '';
                this.turn = 'O';
                this.tableData = [
                    ['', '', ''],
                    ['', '', ''],
                    ['', '', ''],
                ];
            } else {
                this.turn = this.turn === 'O' ? 'X' : 'O';
            }
        }
        if (this.cellData) return;
    },
    created() {
        EventBus.$on('clickTd', this.onClickTd);
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
