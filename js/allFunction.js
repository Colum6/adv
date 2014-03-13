



function collectForm (id) {
    //form_array = [];  // создаем массив данных
    form_array = {}; // СОЗДАЕМ ОБЪЕКТ
    $("#"+id).find("input").each(function(){ // заполняем массив данными из инпутов
            form_array[$(this).attr("id")] = $(this).val() ;
    });
    
    $("#"+id).find("textarea").each(function(){ // заполняем массив данными из текст ареа
            form_array[$(this).attr("id")] = $(this).val() ;                    
    });
    
    
} 
  
function sendFormToAJAX (id_form,type_form, mail_adressat,id_content_feedback ){
/*    for (var key in form_array) { // так мы можем посмотреть и ключи и их значения, либо узнать есть ли элемент в массиве 
        alert("Ключ: " + key + " значение:" + form_array[key]);
    } */
    
    // mail_adressat -  получатель письма (хозяин сайта  грубо говоря)
    // type_form -В зависимости от того или иного ТИПА формы  будут выполняться разные действия
    // ----------------------------------------------------------------------------- 
    // sendMail - отправить письмо на почту  с какой либо информацией
    // sendFeedback - отпраивть  письмо на почту а так же вписать дданные в базу
    /*********************************/
   if (type_form === 'sendMail'){
             
        $.post("./ajax/allFunctionAjax/sendMail.php", {post_form_array : form_array,post_mail_adressat : mail_adressat }, function(data){
        if(data=='true'){
                         
             $("#"+id_form).find("input").each(clearData);
             $("#"+id_form).find("textarea").each(clearData);
             
             function clearData(){ // стираем данные
             $(this).val("") ;
             $(this).removeClass();
             $(this).addClass("inputValidNormal"); // неактивный класс
             $(this).next(".iconYesNo").removeClass("no yes");
             }
             
             
               for (var key in validate_array) { // так мы можем посмотреть и ключи и их значения, либо узнать есть ли элемент в массиве  
                    validate_array[key] = 0;

             } 
             
             
             $("button[id=disabled]").attr("disabled","disabled");
             $("button[id=disabled]").removeClass("ButtonActive");    
             $("button[id=disabled]").addClass("ButtonNoActive");  
                        
        }
        else{
            alert("Ошибка: "+data);
        }    
            
            
        }) 
           
        
    }
    else{
        
            $.post("./ajax/allFunctionAjax/sendFeedback.php", {post_form_array : form_array,post_mail_adressat : mail_adressat }, function(data){
            if(data=='true'){
                 $(".textErrorWrong").html("Письмо отправлено, отзыв принят к модерированию");
                 
                     $("#"+id_form).find("input").each(clearData);
                     $("#"+id_form).find("textarea").each(clearData);
                     
                     function clearData(){ // стираем данные
                     $(this).val("") ;
                     $(this).removeClass();
                     $(this).addClass("inputValidNormal"); 
                     $(this).next(".iconYesNo").removeClass("no yes");
                     }
                   for (var key in validate_array) {// ОБНУЛЯЕМ МАССИВ ВАЛИДАЦИИ 
                        validate_array[key] = 0;
                 } 
                 $("button[id=disabled]").attr("disabled","disabled");
                 $("button[id=disabled]").removeClass("ButtonActive");    
                 $("button[id=disabled]").addClass("ButtonNoActive");  
                 loadFeedback(id_content_feedback);
                 
            }
            else{
                alert("Ошибка: "+data);
            }    
                
                
            })

    }
    
}




function mask_to_telephone(no_mask,id) {
   
        if(no_mask == "no_mask"){
        $.mask.definitions['~']='[+-]'; // для маски
        $("#"+id).mask('+9(999)999-99-99'); // для маски 
        $("#"+id).attr("name","yes_mask"); // для маски    
        }  
  
        
}

//****************ВАЛИДАЦИЯ ИНПУТОВ***************************************************************
function validateInput(form_input,id,type_input,id_result){
    
     if (typeof validate_array ==="undefined"){ // создаем массив ИНПУТОВ если он еще не создан 
         form_validate_array(form_input);
     }
    
    /*
    Виды инпутов
    textLong- длинный текст до 1 тысячи сиволов руские и английские буквы + цифры
    textRus09 - длинный текст до 1 тысячи сиволов только руские буквы + цифры
    textEng09 - длинный текст до 1 тысячи сиволов только английские буквы + цифры
    e-mail - только для мыла
    password - пароль
    */
    
    
     input_val = $("#"+id).val();
     switch (type_input)
         {
         //------------------------------------
         case 'textLong': // проверяем  
          if(isValidTextLongRUSENG09(input_val)){
            for (var key in validate_array) { // так мы можем посмотреть и ключи и их значения, либо узнать есть ли элемент в массиве 
                if (id===key){                // в массиве есть 
                    validate_array[key] = 1;
                }
            } 
          testAllInputVaildate();
          $("#"+id_result).removeClass();
          $("#"+id_result).addClass("inputValidYes");
          $("#"+id_result).next(".iconYesNo").removeClass("no yes").addClass("yes");
          $(".textErrorWrong").html("");
          }
          else{
            for (var key in validate_array) { // так мы можем посмотреть и ключи и их значения, либо узнать есть ли элемент в массиве 
                if (id===key){                // в массиве есть 
                    validate_array[key] = 0;
                }
            }
           testAllInputVaildate();
          $("#"+id_result).addClass("inputValidNo");
          $(".textErrorWrong").html("Заполните поле");
          $("#"+id_result).next(".iconYesNo").removeClass("no yes").addClass("no");
          }     
          break;
          
           //------------------------------------
         case 'textRus09': // проверяем  
          if(isValidTextLongRUS09(input_val)){
            for (var key in validate_array) { // так мы можем посмотреть и ключи и их значения, либо узнать есть ли элемент в массиве 
                if (id===key){                // в массиве есть 
                    validate_array[key] = 1;   
                }
            } 
          testAllInputVaildate();
          $("#"+id_result).removeClass();
          $("#"+id_result).addClass("inputValidYes");
          $("#"+id_result).next(".iconYesNo").removeClass("no yes").addClass("yes");
          $(".textErrorWrong").html(""); 
          }
            else{
            for (var key in validate_array) { // так мы можем посмотреть и ключи и их значения, либо узнать есть ли элемент в массиве 
                if (id===key){                // в массиве есть 
                    validate_array[key] = 0;
                }
            }
           testAllInputVaildate();
           $("#"+id_result).addClass("inputValidNo");
           $("#"+id_result).next(".iconYesNo").removeClass("no yes").addClass("no");
           $(".textErrorWrong").html("Только русские буквы и цифры");
          }       
          break;
          //------------------------------------
          case 'textEng09': // проверяем  
          if(isValidTextLongENG09(input_val)){
            for (var key in validate_array) { // так мы можем посмотреть и ключи и их значения, либо узнать есть ли элемент в массиве 
                if (id===key){                // в массиве есть 
                    validate_array[key] = 1;    
                }
            } 
          testAllInputVaildate();
          $("#"+id_result).removeClass();
          $("#"+id_result).addClass("inputValidYes");  
          $("#"+id_result).next(".iconYesNo").removeClass("no yes").addClass("yes");
           $(".textErrorWrong").html("");  
          }
            else{
            for (var key in validate_array) { // так мы можем посмотреть и ключи и их значения, либо узнать есть ли элемент в массиве 
                if (id===key){                // в массиве есть 
                    validate_array[key] = 0;
                }
            }
           testAllInputVaildate();
            $("#"+id_result).addClass("inputValidNo");
            $("#"+id_result).next(".iconYesNo").removeClass("no yes").addClass("no");
             $(".textErrorWrong").html("Только латинские буквы и цифры"); 
          }       
          break;
         //------------------------------------
         case 'e-mail': 
          if(isValidEmailAddress(input_val)){
            for (var key in validate_array) { // так мы можем посмотреть и ключи и их значения, либо узнать есть ли элемент в массиве 
                if (id===key){                // в массиве есть 
                    validate_array[key] = 1;
                }
            } 
          testAllInputVaildate();
          $("#"+id_result).removeClass();
          $("#"+id_result).addClass("inputValidYes"); 
          $("#"+id_result).next(".iconYesNo").removeClass("no yes").addClass("yes");
           $(".textErrorWrong").html(""); 
          }
          else{
            for (var key in validate_array) { // так мы можем посмотреть и ключи и их значения, либо узнать есть ли элемент в массиве 
                if (id===key){                // в массиве есть 
                    validate_array[key] = 0;
                }
            }
           testAllInputVaildate();
           $("#"+id_result).addClass("inputValidNo");
           $("#"+id_result).next(".iconYesNo").removeClass("no yes").addClass("no");
            $(".textErrorWrong").html("Некорректный формат"); 
          }
         break;
         //------------------------------------
         case 'password': 
         if(isValidPassword(input_val)){
            for (var key in validate_array) { // так мы можем посмотреть и ключи и их значения, либо узнать есть ли элемент в массиве 
                if (id===key){                // в массиве есть 
                    validate_array[key] = 1;
                }
            }
          testAllInputVaildate(); 
          $("#"+id_result).removeClass();
          $("#"+id_result).addClass("inputValidYes");
          $("#"+id_result).next(".iconYesNo").removeClass("no yes").addClass("yes");  
          }
            else{
            for (var key in validate_array) { // так мы можем посмотреть и ключи и их значения, либо узнать есть ли элемент в массиве 
                if (id===key){                // в массиве есть 
                    validate_array[key] = 0;
                }
            }
           testAllInputVaildate();
             $("#"+id_result).addClass("inputValidNo");
             $("#"+id_result).next(".iconYesNo").removeClass("no yes").addClass("no");
   
          }        
         break;
         //------------------------------------
         case 'login': 
           if(isValidLogin(input_val)){
            for (var key in validate_array) { // так мы можем посмотреть и ключи и их значения, либо узнать есть ли элемент в массиве 
                if (id===key){                // в массиве есть 
                    validate_array[key] = 1;
                     //тут можно встаивть еще проверку с базой данных (только на регистрацию)                           
                    
                }
            } 
           testAllInputVaildate();
          $("#"+id_result).removeClass();
          $("#"+id_result).addClass("inputValidYes");  
          $("#"+id_result).next(".iconYesNo").removeClass("no yes").addClass("yes");
          }
            else{
            for (var key in validate_array) { // так мы можем посмотреть и ключи и их значения, либо узнать есть ли элемент в массиве 
                if (id===key){                // в массиве есть 
                    validate_array[key] = 0;
                }
            }
           testAllInputVaildate();
           $("#"+id_result).addClass("inputValidNo");
           $("#"+id_result).next(".iconYesNo").removeClass("no yes").addClass("no");
          }    
         break;
          //------------------------------------
         case 'phone':
           if(isValidPhoneClient(input_val)){
            for (var key in validate_array) { // так мы можем посмотреть и ключи и их значения, либо узнать есть ли элемент в массиве 
                if (id===key){                // в массиве есть 
                    validate_array[key] = 1;
                     //тут можно встаивть еще проверку с базой данных (только на регистрацию)                           
                    
                }
            } 
           testAllInputVaildate(); 
           $("#"+id_result).removeClass();
          $("#"+id_result).addClass("inputValidYes"); 
          $("#"+id_result).next(".iconYesNo").removeClass("no yes").addClass("yes");
           $(".textErrorWrong").html(""); 
          }
            else{
            for (var key in validate_array) { // так мы можем посмотреть и ключи и их значения, либо узнать есть ли элемент в массиве 
                if (id===key){                // в массиве есть 
                    validate_array[key] = 0;
                }
            }
           testAllInputVaildate();
          $("#"+id_result).addClass("inputValidNo");
          $("#"+id_result).next(".iconYesNo").removeClass("no yes").addClass("no");
          $(".textErrorWrong").html("Не корректный формат. +7(xxx)-xx-xx-xxx"); 
          }    
         break;
         
         
         //------------------------------------ЧИСЛА
         case 'number': // проверяем  
          if(isValidNumber(input_val)){
            for (var key in validate_array) { // так мы можем посмотреть и ключи и их значения, либо узнать есть ли элемент в массиве 
                if (id===key){                // в массиве есть 
                    validate_array[key] = 1;
                }
            } 
          testAllInputVaildate();
          $("#"+id_result).removeClass();
          $("#"+id_result).addClass("inputValidYes");
          $("#"+id_result).next(".iconYesNo").removeClass("no yes").addClass("yes");
          $(".textErrorWrong").html("");
          }
          else{
            for (var key in validate_array) { // так мы можем посмотреть и ключи и их значения, либо узнать есть ли элемент в массиве 
                if (id===key){                // в массиве есть 
                    validate_array[key] = 0;
                }
            }
           testAllInputVaildate();
          $("#"+id_result).addClass("inputValidNo");
          $(".textErrorWrong").html("Заполните поле");
          $("#"+id_result).next(".iconYesNo").removeClass("no yes").addClass("no");
          }     
          break;
         }
   

}

function isValidTextLongRUSENG09(textLong) {
    var pattern = new RegExp(/^[0-9а-яА-Яa-z-A-Z_-]| (\@)|(\")|(\&){2,1000}$/);
    var textLong = textLong.replace(/\s/g, "");
    return pattern.test(textLong);
    }  
function isValidTextLongRUS09(textLong) {
    var pattern = new RegExp(/^[0-9а-яА-Яa-z-A-Z_-]| (\@)|(\")|(\&){2,1000}$/);
    var textLong = textLong.replace(/\s/g, "");
    return pattern.test(textLong);
    }  
function isValidTextLongENG09(textLong) {
    var pattern = new RegExp(/^[0-9а-яА-Яa-z-A-Z_-]| (\@)|(\")|(\&){2,1000}$/);
    var textLong = textLong.replace(/\s/g, "");
    return pattern.test(textLong);
    }  
function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
    } 
function isValidPassword(password) {
    var pattern = new RegExp(/^[0-9a-zA-Z_-]{2,30}$/);
    return pattern.test(password);
    }  
function isValidLogin(login) {
    var pattern = new RegExp(/^[0-9a-zA-Z_-]{6,30}$/);
    return pattern.test(login);
    } 
function isValidPhoneClient(phone) {
    var pattern = new RegExp(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);
    return pattern.test(phone);
}    
function isValidNumber(number) {
    var pattern = new RegExp(/^[0-9_-]| (\@)|(\")|(\&){2,1000}$/);
    var number = number.replace(/\s/g, "");
    return pattern.test(number);
    }  


function form_validate_array(id){// создаем массив полей которые нужно првоерить (!!! ЕСЛИ НЕ ВСЕ ПОЛЯ ОБЯЗАТЕЛЬНЫ, ТО ТУТ НУЖНО СОСТАВИТЬМ АССИВ ПРАИВЛЬНЫХ)

    validate_array = []; // СОЗДАЕМ ОБЪЕКТ
    $("#"+id).find("input").each(function(){ // заполняем массив данными из инпутов
            validate_array[$(this).attr("id")] = 0 ;
    });
    
    $("#"+id).find("textarea").each(function(){ // заполняем массив данными из текст ареа
            validate_array[$(this).attr("id")] = 0 ;                    
    });    

}

function testAllInputVaildate(){//если все поля праивльны  разрешаем дальнейшие действия
        validate_array_length = 0;
        sum=0;
        for (var key in validate_array) { // так мы можем посмотреть и ключи и их значения, либо узнать есть ли элемент в массиве 
               // alert("ключ"+key+"значение"+validate_array[key]);
                if(validate_array[key]>0){
                  
                    sum=sum+validate_array[key];
                   
                }
                validate_array_length++; 
        }
        
        if (validate_array_length==sum){
             $("button[id=disabled]").removeAttr("disabled","disabled"); 
             $("button[id=disabled]").removeClass("ButtonNoActive");    
             $("button[id=disabled]").addClass("ButtonActive")
              
             
        }
        else{
             $("button[id=disabled]").attr("disabled","disabled");
             $("button[id=disabled]").removeClass("ButtonActive");    
             $("button[id=disabled]").addClass("ButtonNoActive");   
        }      
}






//------------------------------------

function loadFeedback(idContentFeedback){ //ЗАГРУЗКА ОТЗЫВОВ  idContentFeedback - div куда выгружать
          $("#"+idContentFeedback).html("");
          $.post("./ajax/allFunctionAjax/loadFeedback.php", {}, function(data){
                    length_feedback = data.length; 
                    feedback_content = data;
                    for(var i=0; i<length_feedback;i++)
                    {            
                    $("#"+idContentFeedback).prepend('<li id="oneBlockFeedback" class="oneBlockFeedback">'+data[i].name+'<p>'+data[i].feedback+'</p></li>') // редактируемый блок 
                    }
                
            },'JSON')
}















