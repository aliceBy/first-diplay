module.exports = (sequelize, DataTypes) => {
    return sequelize.define('notice', {
        tp: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        subj: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        conts: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        init: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
    },
    {
        timestamps: true, // 등록업데이트 날짜
        paranoid: true // 삭제 날짜
    })// notice라는 이름으로 테이블생성 / 실질적으로 복수형으로만들어짐
}// 모듈내보내짐