import React from 'react'
import Card from './Card'

const CardList = () => {
    // 🔹 Card 컴포넌트에 전달할 데이터 배열
    const cardData = [
        {no : 1, title : '오로나민씨', content : '힘내자'},
        {no : 2, title : '아이스티', content : '달달구리'},
        {no : 3, title : '샐러드', content : '속이 안 좋아요'}
    ]
    return (
        <div>
            <h1>Card List</h1>
            {/* <Card /> */}
            {/* <Card /> */}
            {/* <Card /> */}
            {
                cardData.map((card, index) => {
                    return <Card key={card.no} title={card.title} content={card.content} />
                })
            }
        </div>
    )
}

export default CardList