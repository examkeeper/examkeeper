var numberOfPanel = 1;
var i = 0; /* Set Global Variable i */
function increment(){
i += 1; /* Function for automatic increment of field's "Name" attribute. */
}
/*
---------------------------------------------

Function to Remove Form Elements Dynamically
---------------------------------------------

*/
function removeElement(parentDiv, childDiv){
if (childDiv == parentDiv){
alert("The parent div cannot be removed.");
}
else if (document.getElementById(childDiv)){
var child = document.getElementById(childDiv);
var parent = document.getElementById(parentDiv);
parent.removeChild(child);
numberOfPanel -= 1;;
}
else{
alert("Child div has already been removed or does not exist.");
return false;
}
}
/*
----------------------------------------------------------------------------

Functions that will be called upon, when user click on the Name text field.

----------------------------------------------------------------------------
*/
function nameFunction(){
var r = document.createElement('span');
var idx = document.createElement('p');
var t = document.createTextNode("id : " + i);
idx.appendChild(t);
r.appendChild(idx)
var y = document.createElement("INPUT");
y.setAttribute("type", "text");
y.setAttribute("placeholder", "Answer");
var br = document.createElement("br");

var a = document.createElement("INPUT");
a.setAttribute("type", "text");
a.setAttribute("placeholder", "Question");

r.appendChild(a)
r.appendChild(br)
var g = document.createElement("IMG");
g.setAttribute("src", "error.png");
increment();
y.setAttribute("Name", "textelement_" + i);
r.appendChild(y);
g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
r.appendChild(g);
r.setAttribute("id", "id_" + i);
document.getElementById("myForm").appendChild(r);
}
/*
-----------------------------------------------------------------------------

Functions that will be called upon, when user click on the E-mail text field.

------------------------------------------------------------------------------
*/
function emailFunction(){
var r = document.createElement('span');
var y = document.createElement("INPUT");
y.setAttribute("type", "text");
y.setAttribute("placeholder", "Email");
var g = document.createElement("IMG");
g.setAttribute("src", "delete.png");
increment();
y.setAttribute("Name", "textelement_" + i);
r.appendChild(y);
g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
r.appendChild(g);
r.setAttribute("id", "id_" + i);
document.getElementById("myForm").appendChild(r);
}
/*
-----------------------------------------------------------------------------

Functions that will be called upon, when user click on the Contact text field.

------------------------------------------------------------------------------
*/
function contactFunction(){
var r = document.createElement('span');
var y = document.createElement("INPUT");
y.setAttribute("type", "text");
y.setAttribute("placeholder", "Contact");
var g = document.createElement("IMG");
g.setAttribute("src", "delete.png");
increment();
y.setAttribute("Name", "textelement_" + i);
r.appendChild(y);
g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
r.appendChild(g);
r.setAttribute("id", "id_" + i);
document.getElementById("myForm").appendChild(r);
}
/*
-----------------------------------------------------------------------------

Functions that will be called upon, when user click on the Message textarea field.

------------------------------------------------------------------------------
*/
function textareaFunction(){
var r = document.createElement('span');
var y = document.createElement("TEXTAREA");
var g = document.createElement("IMG");
y.setAttribute("cols", "17");
y.setAttribute("placeholder", "Reading paragraph");
g.setAttribute("src", "error.png");
increment();
y.setAttribute("Name", "textelement_" + i);
r.appendChild(y);
g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
r.appendChild(g);
r.setAttribute("id", "id_" + i);
document.getElementById("myForm").appendChild(r);
}
/*
-----------------------------------------------------------------------------

Functions that will be called upon, when user click on the Reset Button.

------------------------------------------------------------------------------
*/
function resetElements(){
document.getElementById('myForm').innerHTML = '';
}

var idNum = 2;
var counter = 2;
var limit = 100;
    function addInput() {
        numberOfPanel += 1;


        if (counter == limit)  {
            alert("You have reached the limit of adding " + counter + " inputs");
        }
        else {
            newdiv = '<div class="panel" id="' + counter + '">\
              <div class="panel-head">\
\
                    <div class="form-control">\
                      <label>Question Type</label>\
                      <select id="question'+counter+'" onchange="show('+ counter +');">\
                        <option value="voc'+counter+'">Vocabulary</option>\
                        <option value="multiple'+counter+'">Multiple Choice</option>\
                        <option value="passage'+counter+'">Passage Completion</option>\
                        <option value="cloze'+counter+'">Cloze</option>\
                        <option value="reading'+counter+'">Reading Comprehension</option>\
                        <option value="translation'+counter+'">Translation</option>\
                      </select>\
                    </div>\
\
                </div>\
                <div class="panel-body">\
                  <div class="" id="Qvoc'+counter+'" style="">\
                    <div class="form-control-group">\
                      <div class="form-control grow-2x">\
                        <label>Question</label>\
                        <input type="text" placeholder="question">\
                      </div>\
\
                      <div class="form-control">\
                        <label>Answer</label>\
                        <input type="text" placeholder="answer">\
                      </div>\
                    </div>\
                  </div>\
\
                  <div class="" id="Qmultiple'+counter+'" style="display:none;">\
\
                      <div class="form-control">\
                        <label>Question</label>\
                        <input type="text" placeholder="question">\
                      </div>\
                      <div class="form-control-group">\
                        <fieldset>\
                          <legend>option</legend>\
                          <div class="form-control">\
                            <label>A</label>\
                            <input type="text">\
                          </div>\
                            <button type="button" name="button">add</button>\
\
                        </fieldset>\
                      </div>\
                        <div class="form-control">\
                          <label>Answer</label>\
                          <input type="text" placeholder="Answer">\
                        </div>\
\
                  </div>\
\
                  <div class="" id="Qpassage'+counter+'" style="display:none;">\
                    <div class="form-control">\
                      <label>Passage</label>\
                      <textarea placeholder="passage..."></textarea>\
                    </div>\
\
                    <div class="form-control-group">\
                      <fieldset>\
                        <legend>#1</legend>\
                        <div class="form-control">\
                          <label>A</label>\
                          <input type="text">\
                        </div>\
                          <button type="button" name="button">add option</button>\
                          <div class="form-control">\
                            <label>Answer</label>\
                            <input type="text" placeholder="Answer">\
                          </div>\
                      </fieldset>\
                    </div>\
                    <br>\
                    <div class="form-control">\
                      <button type="button" name="button">add question</button>\
                    </div>\
                  </div>\
\
                  <div class="" id="Qcloze'+counter+'" style="display:none;">\
                    <div class="form-control">\
                      <label>Passage</label>\
                      <textarea placeholder="passage..."></textarea>\
                    </div>\
\
                    <div class="form-control-group">\
                      <fieldset>\
                        <legend>option</legend>\
                        <div class="form-control">\
                          <label>A</label>\
                          <input type="text">\
                        </div>\
                            <button type="button" name="button">add option</button>\
                      </fieldset>\
                    </div>\
                    <div class="form-control">\
                      <label>Answer</label>\
                      <input type="text" placeholder="example:BACDE....">\
                    </div>\
                  </div>\
\
                  <div id="Qreading'+counter+'" style="display:none;">\
                    <div class="form-control">\
                      <label>Passage</label>\
                      <textarea placeholder="passage..."></textarea>\
                    </div>\
\
                    <div class="form-control">\
                      <label>Question</label>\
                      <input type="text" placeholder="question">\
                    </div>\
                    <div class="form-control-group">\
                      <fieldset>\
                        <legend>option</legend>\
                        <div class="form-control">\
                          <label>A</label>\
                          <input type="text">\
                        </div>\
                          <button type="button" name="button">add</button>\
\
                      </fieldset>\
                    </div>\
                      <div class="form-control">\
                        <label>Answer</label>\
                        <input type="text" placeholder="Answer">\
                      </div>\
\
                      <div class="form-control">\
                        <button type="button" name="button">add question</button>\
                      </div>\
                  </div>\
\
                  <div class="" id="Qtranslation'+counter+'" style="display:none;">\
                      <div class="form-control">\
                        <label>Question</label>\
                        <input type="text" placeholder="question">\
                      </div>\
\
                      <div class="form-control">\
                        <label>Answer</label>\
                        <input type="text" placeholder="answer">\
                      </div>\
                  </div>\
                </div>\
                <div class="panel-footer">\
                    <button class="button-primary">test</button>\
                    <button class="button-primary-text" onclick="removeElement(\'dynamicInput\','+counter+')">delete</button>\
                </div>\
            </div>';
            document.getElementById("dynamicInput").innerHTML+=newdiv;
            /*$("#" + divName).append(newdiv);*/
            counter++;
            idNum++;
            window.location.href='#btm'
        }
    }

function show(c){
  var selectValue = document.getElementById('question'+c).value;
  if (selectValue == 'voc'+c){
    document.getElementById('Qvoc'+c).style.display = "block";
    document.getElementById('Qmultiple'+c).style.display = "none";
    document.getElementById('Qpassage'+c).style.display = "none";
    document.getElementById('Qcloze'+c).style.display = "none";
    document.getElementById('Qreading'+c).style.display = "none";
    document.getElementById('Qtranslation'+c).style.display = "none";
  }else if (selectValue == "multiple"+c){
    document.getElementById('Qvoc'+c).style.display = "none";
    document.getElementById('Qmultiple'+c).style.display = "block";
    document.getElementById('Qpassage'+c).style.display = "none";
    document.getElementById('Qcloze'+c).style.display = "none";
    document.getElementById('Qreading'+c).style.display = "none";
    document.getElementById('Qtranslation'+c).style.display = "none";
  }else if (selectValue == "passage"+c){
    document.getElementById('Qvoc'+c).style.display = "none";
    document.getElementById('Qmultiple'+c).style.display = "none";
    document.getElementById('Qpassage'+c).style.display = "block";
    document.getElementById('Qcloze'+c).style.display = "none";
    document.getElementById('Qreading'+c).style.display = "none";
    document.getElementById('Qtranslation'+c).style.display = "none";
  }else if (selectValue == "cloze"+c){
    document.getElementById('Qvoc'+c).style.display = "none";
    document.getElementById('Qmultiple'+c).style.display = "none";
    document.getElementById('Qpassage'+c).style.display = "none";
    document.getElementById('Qcloze'+c).style.display = "block";
    document.getElementById('Qreading'+c).style.display = "none";
    document.getElementById('Qtranslation'+c).style.display = "none";
  }else if (selectValue == "reading"+c){
    document.getElementById('Qvoc'+c).style.display = "none";
    document.getElementById('Qmultiple'+c).style.display = "none";
    document.getElementById('Qpassage'+c).style.display = "none";
    document.getElementById('Qcloze'+c).style.display = "none";
    document.getElementById('Qreading'+c).style.display = "block";
    document.getElementById('Qtranslation'+c).style.display = "none";
  }else if (selectValue == "translation"+c){
    document.getElementById('Qvoc'+c).style.display = "none";
    document.getElementById('Qmultiple'+c).style.display = "none";
    document.getElementById('Qpassage'+c).style.display = "none";
    document.getElementById('Qcloze'+c).style.display = "none";
    document.getElementById('Qreading'+c).style.display = "none";
    document.getElementById('Qtranslation'+c).style.display = "block";
  }

}
