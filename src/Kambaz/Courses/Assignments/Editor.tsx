export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
                      <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
                      <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">Assignment Group 
                <option value={"AssignmentS"}>Assignments</option>
                <option value={"Quizzes"}>Quizzes</option>
                <option value={"Exams"}>Exams</option>
                <option value={"Project"}>Project</option>
            </select>
          </td>
        </tr>
        <tr>
                      <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade</label>
          </td>
          <td>
            <select id="wd-display-grade-as">Display Grade 
                <option value={"Percentage"}>Percentage</option>
                <option value={"Points Earnt"}>Points Earnt</option>
            </select>
          </td>
        </tr>
        <tr>
                      <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Submission Type</label>
          </td>
          <td>
            <select id="wd-display-grade-as">Online 
                <option value={"Online"}>Online</option>
            </select>
            <br/>
            Online entry options
            <br /><input type="checkbox" name="wd-text-entry" id="wd-text-entry"/>
            <label htmlFor="wd-text-entry">Text Entry</label>  
            <br /><input type="checkbox" name="wd-website-url" id="wd-website-url"/>
            <label htmlFor="wd-website-url">Website URL</label>  
            <br /><input type="checkbox" name="wd-media-recordings" id="wd-media-recordings"/>
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br /><input type="checkbox" name="wd-student-annotation" id="wd-student-annotation"/>
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br /><input type="checkbox" name="wd-file-upload" id="wd-file-upload"/>
            <label htmlFor="wd-file-upload">File uploads</label>
          </td>
        </tr>
        <tr>
                      <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign Assign to</label>
          </td>
          <td>
            <br />
            <input id="wd-assign-to" type="textbox" defaultValue={"Everyone"}></input>
          </td>
        </tr>
        <tr>
                      <td align="right" valign="top">
            <label htmlFor="wd-due-date">Due:</label>
          </td>
          <td>
            <br />
            <input id="wd-due-date" type="date" defaultValue={"Everyone"}></input>
          </td>
        </tr>
        <tr>
            <td align="right" valign="top">
            <label htmlFor="wd-available-from">Avalilable from:</label>
          </td>
          <td>
            <br />
            <input id="wd-available-from" type="date"></input>
          </td>

        <td align="right" valign="top">
            <label htmlFor="wd-available-until">Available until:</label>
          </td>
          <td>
            <br />
            <input id="wd-available-until" type="date"></input>
          </td>
        </tr>
      </table>
      <button type="submit">Save</button>
      <button>Cancel</button>
    </div>
);}
