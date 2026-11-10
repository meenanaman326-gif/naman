/* Pure validation shared by the app and tests. */
(function(root){
 'use strict';
 function validDate(v){return /^\d{4}-\d{2}-\d{2}$/.test(v)&&!Number.isNaN(Date.parse(v+'T12:00:00Z'))&&new Date(v+'T12:00:00Z').toISOString().slice(0,10)===v;}
 function validateTask(input){
  const task={title:String(input.title??'').trim(),notes:String(input.notes??'').trim(),date:String(input.date??''),time:String(input.time??''),priority:String(input.priority??'normal')},errors={};
  if(!task.title)errors.title='Enter a task title.';else if(task.title.length>160)errors.title='Keep the title within 160 characters.';
  if(task.notes.length>4000)errors.notes='Keep notes within 4,000 characters.';
  if(task.date&&!validDate(task.date))errors.date='Enter a valid due date.';
  if(task.time&&!/^([01]\d|2[0-3]):[0-5]\d$/.test(task.time))errors.time='Enter a valid time.';else if(task.time&&!task.date)errors.date='Choose a due date when setting a time.';
  if(!['high','normal','low'].includes(task.priority))errors.priority='Choose a valid priority.';
  return {task,errors,valid:Object.keys(errors).length===0};
 }
 function isSavedTask(t){return !!t&&typeof t.id==='string'&&t.id.length>0&&typeof t.title==='string'&&typeof t.notes==='string'&&typeof t.date==='string'&&typeof t.time==='string'&&typeof t.done==='boolean'&&validateTask(t).valid&&(!t.done||typeof t.completedAt==='string'&&!Number.isNaN(Date.parse(t.completedAt)));}
 const api={validateTask,isSavedTask,validDate};if(typeof module==='object'&&module.exports)module.exports=api;else root.TaskState=api;
})(typeof globalThis==='object'?globalThis:this);
