import React from 'react';

export const VisibilityControl = props => {
    return (
        <div className="form-check">
            <label>
                <input
                    type="checkbox"
                    className="form-check-input"
                    checked={props.isChecked}
                    onChange={e => props.callback(e.target.checked)}
                />
                Show {props.description}
            </label>
        </div>
    );
};
