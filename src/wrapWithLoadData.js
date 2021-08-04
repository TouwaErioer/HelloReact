import React, {Component} from 'react'

const wrapWithLoadData = (WrappedComponent, name) => {
    class LocalStorageActions extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: this.loadData()
            };
        }

        saveData(data) {
            try {
                localStorage.setItem(name, JSON.stringify(data));
            } catch (e) {
                localStorage.setItem(name, data);
            }
        }

        loadData(){
            let data;
            try{
                data = JSON.parse(localStorage.getItem(name))
            }catch (e) {
                data = localStorage.getItem(name);
            }
            return data === null ? [] : data;
        }

        render() {
            return (
                <WrappedComponent
                    data={this.state.data}
                    saveData={this.saveData.bind(this)}
                    {...this.props}
                />
            )
        }
    }

    return LocalStorageActions;
};

export default wrapWithLoadData;