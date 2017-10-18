class SweetSelector{
  static select(str){
    switch (str[0]) {
      case '#':
          return document.getElementById(str.substring(1,99))
        break;
      case '.':
          return document.getElementsByClassName(str.substring(1,99))
        break;
      default:
          return document.getElementsByTagName(str)
        break;
    }
  }
}

class DOM{
  static hide(str){
    switch (str[0]) {
      case '#':
           document.getElementById(str.substring(1,99)).style.visibility='hidden'
        break;
      case '.':
           let list = document.getElementsByClassName(str.substring(1,99))
           for(let i=0;i<list.length;i++){
             list[i].style.visibility='hidden'
           }
        break;
      default:
           document.getElementsByTagName(str).style.visibility='hidden'
        break;
    }
  }


  static show(str){
    switch (str[0]) {
      case '#':
           document.getElementById(str.substring(1,99)).style.visibility='visible'
        break;
      case '.':
      let list = document.getElementsByClassName(str.substring(1,99))
      for(let i=0;i<list.length;i++){
        list[i].style.visibility='visible'
      }
        break;
      default:
           document.getElementsByTagName(str).style.visibility='visible'
        break;
    }
  }

  static addClass(str,classname){
    let list = document.getElementsByClassName(str.substring(1,99))
    for(let i=0;i<list.length;i++){
      let newClass =   list[i].className + ' ' + classname
      list[i].className = newClass
    }
  }

  static removeClass(str,classname){
    let list = document.getElementsByClassName(str.substring(1,99))
    for(let i=0;i<list.length;i++){
      let newClass =   list[i].className
      list[i].className = newClass.replace(' ' + classname ,'')
    }
  }

}


class EventDispatcher{
  static on(str,eventname,cb){
    let list = document.getElementsByClassName(str.substring(1,99))
    for(let i=0;i<list.length;i++){
      list[i].addEventListener(eventname , ()=>{
        //do i should write here?
      })
    }
    cb()
  }
}
