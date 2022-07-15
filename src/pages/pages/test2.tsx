import { IonPage, IonHeader, IonContent, NavContext, useIonViewWillEnter } from '@ionic/react';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';

const About: React.FC = () => {
  const history = useHistory();
  const { navigate } = useContext(NavContext);
  const params = useParams();

  useIonViewWillEnter(() => {
    console.log('test2', params);
  });

  useEffect(() => {
    console.log('test22', params);
  }, []);

  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent>
        {/* <div
          onClick={() => {
            history.replace(`/test/test3/${Math.floor(Math.random() * 1000)}`, { direction: 'back' });
          }}
        >
          Test2
        </div> */}
        {/* <div onClick={() => navigate(`/test/test3/${Math.floor(Math.random() * 1000)}`, 'forward', 'replace')}> */}
        <div onClick={() => history.replace(`/test/test3/${Math.floor(Math.random() * 1000)}`)}>
          Test2
        </div>
        <div onClick={() => navigate('/test/test2', 'back', 'pop')}>Test2 111</div>
      </IonContent>
    </IonPage>
  );
};

export default About;
