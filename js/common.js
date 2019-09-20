
function sendRequest(jsondata,function_name,errorFunc,requestType)
{

$.ajax({
            url: "http://localhost",

            data: {
                format: "json"
                },

            contentType:"application/json; charset=utf-8",
            
            
            requestType: "GET",

            error: function()
                {
               
                },

            success: function()
                {
                    
                }

       });
}