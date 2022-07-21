import { IonPage, IonHeader, IonContent, NavContext, useIonViewWillEnter } from '@ionic/react';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';

const About: React.FC = () => {
  const history = useHistory();
  const { navigate } = useContext(NavContext);
  const params = useParams();

  useIonViewWillEnter(() => {
    console.log('useIonViewWillEnter test3', params);
  });

  useEffect(() => {
    console.log('useEffect test3', params);
  }, []);

  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent>
        <div onClick={() => history.push(`/test/test4/${Math.floor(Math.random() * 1000)}`)}>
          Test3
        </div>
        {/* <div onClick={() => navigate(`/test/test4/${Math.floor(Math.random() * 1000)}`, 'forward', 'replace')}>
          Test3
        </div> */}
        {/* <div onClick={() => navigate('/test/test1', 'back', 'pop')}>Test3</div> */}
      </IonContent>
    </IonPage>
  );
};

export default About;
