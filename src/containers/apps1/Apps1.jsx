import React, { useState } from 'react';
import './apps1.css';
import googlelogo from '../../assets/googlelogo.png'
import slacklogo from '../../assets/slacklogo.png'
import notionlogo from '../../assets/notionlogo.png'
import figmalogo from '../../assets/figmalogo.png'
import mirologo from '../../assets/mirologo.png'
import airtablelogo from '../../assets/airtablelogo.png'
import confluencelogo from '../../assets/confluencelogo.png'
import dovetaillogo from '../../assets/dovetaillogo.png'


const Apps1 = () => {

  const [figmaConnect, setfigmaConnect] = useState(false);
  const [googleConnect, setgoogleConnect] = useState(false);
  const [slackConnect, setslackConnect] = useState(false);
  const [notionConnect, setnotionConnect] = useState(false);
  const [miroConnect, setmiroConnect] = useState(false);
  const [airtableConnect, setairtableConnect] = useState(false);
  const [confluenceConnect, setconfluenceConnect] = useState(false);
  const [dovetailConnect, setdovetailConnect] = useState(false);

  return (
    <>
      <div className="row__one">
        <div className="outer__box">
          <div className="inner__box">
            <div className="layout">
              <img src={figmalogo} alt="figma"/>
              <div className="header" onClick={() => setfigmaConnect(!figmaConnect)}>
                  <button type="button" id={figmaConnect ? "connected" : ""}>{ figmaConnect ? "Connected" : "Connect"}</button>
              </div>
            </div>
              <div className="title">Figma</div>
              <p>Stay up to date with your team's latest designs.</p>
          </div>
        </div>
        <div className="outer__box">
          <div className="inner__box">
            <div className="layout">
              <img src={googlelogo} alt="google"/>
              <div className="header" onClick={() => setgoogleConnect(!googleConnect)}>
                  <button type="button" id={googleConnect ? "connected" : ""}>{ googleConnect ? "Connected" : "Connect"}</button>
              </div>
            </div>
              <div className="title">Google Drive</div>
              <p>Access all of your documents and information.</p>
          </div>
        </div>

        <div className="outer__box">
          <div className="inner__box">
            <div className="layout">
              <img src={slacklogo} alt="slack"/>
              <div className="header" onClick={() => setslackConnect(!slackConnect)}>
                  <button type="button" id={slackConnect ? "connected" : ""}>{ slackConnect ? "Connected" : "Connect"}</button>
              </div>
            </div>
              <div className="title">Slack</div>
              <p>Communicate seamlessly with your teammates.</p>
          </div>
        </div>

        <div className="outer__box">
          <div className="inner__box">
            <div className="layout">
              <img src={notionlogo} alt="notion"/>
              <div className="header" onClick={() => setnotionConnect(!notionConnect)}>
                  <button type="button" id={notionConnect ? "connected" : ""}>{ notionConnect ? "Connected" : "Connect"}</button>
              </div>
            </div>
              <div className="title">Notion</div>
              <p>Sync all of your notes, team docs, and other important information.</p>
          </div>
        </div>

      </div>

      <div className="row__two">
        <div className="outer__box">
            <div className="inner__box">
              <div className="layout">
                <img src={mirologo} alt="miro"/>
                <div className="header" onClick={() => setmiroConnect(!miroConnect)}>
                  <button type="button" id={miroConnect ? "connected" : ""}>{ miroConnect ? "Connected" : "Connect"}</button>
                </div>
              </div>
                <div className="title">Miro</div>
                <p>Unlock the power of collaboration to distill insights from data.</p>
            </div>
          </div>
          <div className="outer__box">
            <div className="inner__box">
              <div className="layout">
                <img src={airtablelogo} alt="airtable"/>
                <div className="header" onClick={() => setairtableConnect(!airtableConnect)}>
                  <button type="button" id={airtableConnect ? "connected" : ""}>{ airtableConnect ? "Connected" : "Connect"}</button>
                </div>
              </div>
                <div className="title">Airtable</div>
                <p>Keep your data organized in a spreadsheet-database format.</p>
            </div>
          </div>
          <div className="outer__box">
            <div className="inner__box">
              <div className="layout">
                <img src={confluencelogo} alt="confluence"/>
                <div className="header" onClick={() => setconfluenceConnect(!confluenceConnect)}>
                  <button type="button" id={confluenceConnect ? "connected" : ""}>{ confluenceConnect ? "Connected" : "Connect"}</button>
                </div>
              </div>
                <div className="title">Confluence</div>
                <p>Create content, collaborate on work, and organize and share information.</p>
            </div>
          </div>
          <div className="outer__box">
            <div className="inner__box">
              <div className="layout">
                <img src={dovetaillogo} alt="dovetail"/>
                <div className="header" onClick={() => setdovetailConnect(!dovetailConnect)}>
                  <button type="button" id={dovetailConnect ? "connected" : ""}>{ dovetailConnect ? "Connected" : "Connect"}</button>
                </div>
              </div>
                <div className="title">Dovetail</div>
                <p>Organize and tag your research in a collaborative platform.</p>
            </div>
          </div>
      </div>
    </>

  )
}

export default Apps1
