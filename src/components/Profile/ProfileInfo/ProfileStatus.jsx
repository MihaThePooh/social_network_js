import React from 'react'
import s from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activeteEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactiveteEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState()
        }
    }

    render() {
        return <>
            <span>стАтус такой: </span>
            {!this.state.editMode &&
                <span onDoubleClick={this.activeteEditMode}>{this.props.status}</span>
            }
            {this.state.editMode &&
                <input
                    onChange={this.onStatusChange}
                    autoFocus={true}
                    onBlur={this.deactiveteEditMode}
                    value={this.state.status}/>
            }
        </>
    }
}

export default ProfileStatus