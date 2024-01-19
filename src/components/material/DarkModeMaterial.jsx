import React from 'react'

const componentName = () => {
    return (
        <>
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="darkmodeswitch"/>
                                <label className="form-check-label text-muted px-2 " for="darkmodeswitch">Activate Dark
                                    Mode</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default componentName