import {observable,action,autorun} from 'mobx';

class InformationStore{
  @observable weight = ''
  // @observable wakeup = '08:00'
  // @observable sleep = '23:00'

  @action _setWeight(newData){
    this.weight=newData;   
  }

  // @action _setTime(timeName, newTime){
  //   if(timeName === "wakeup")
  //     {this.wakeup=newTime;}
  //   else if ( timeName === "sleep")
  //     {this.sleep=newTime;}
  // }
  
}

export default new InformationStore();