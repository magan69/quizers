                                                                                                                          
   import Option from "./Option";                                                                                          
                                                                                                                           
   function Question({ question, options = [], selected, onSelect }) {                                                     
     return (                                                                                                              
       <div className="question">                                                                                          
         <h2>{question}</h2>                                                                                               
         <div className="options">                                                                                         
           {options.map((text, index) => (                                                                                 
             <Option                                                                                                       
               key={text}                                                                                                  
               text={text}                                                                                                 
               isSelected={selected === index}                                                                             
               onClick={() => onSelect(index)}                                                                             
             />                                                                                                            
           ))}                                                                                                             
         </div>                                                                                                            
       </div>                                                                                                              
     );                                                                                                                    
   }                                                                                                                       
                                                                                                                           
   export default Question; 