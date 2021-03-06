import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {Session} from 'meteor/session';
import './main.html';

Template.picturebox.onCreated(function (){
  Session.set('picnum', 1);
  return;
})

Template.picturebox.helpers({
  picPath(){
    n = Session.get('picnum');
    return "./d"+ n.toString() + ".png"
  }
})

Template.picturebox.events({
  "click .fa-arrow-left" (event){
    num = Session.get('picnum');
    if(num > 1){
      num = num -1;
      Session.set('picnum', num)
    }
  },

  "click .fa-arrow-right" (event){
    num = Session.get('picnum');
    num = num +1;
    Session.set('picnum', num)
  },

  "error img" (event){
    n = Session.get("picnum");
    Session.set("picnum", n-1);
  }
})
