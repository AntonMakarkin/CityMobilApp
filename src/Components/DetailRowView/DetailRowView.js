import React from 'react'
import './DetailRowView.css'

const DetailRowView = ({ car }) => {
    const mark = car?.mark
    const model = car?.model
    let markName, modelName

    if (mark === undefined || model === undefined) {
        markName = ''
        modelName = ''
    } else {
        markName = mark
        modelName = model
    }

    return (
        <div className="detail_row_view">
            <input type="text" readOnly disabled className="detail_row_view_input" value={`Выбрана машина ${markName} ${modelName}`} />
        </div>
    )
}

export default DetailRowView
