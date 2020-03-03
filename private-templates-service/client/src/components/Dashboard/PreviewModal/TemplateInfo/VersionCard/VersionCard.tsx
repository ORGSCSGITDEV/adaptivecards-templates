import React from 'react';

import { 
  Template, 
  TemplateInstance 
} from 'adaptive-templating-service-typescript-node';

import {
  CardManageButton,
  CardTitle,
  VersionCardHeader, 
  VersionCardRowTitle,
  DateWrapper,
  VersionCardRow,
  StatusWrapper,
  VersionIcon, 
  VersionWrapper
} from './styled'

import {
  Card,
  CardHeader,
  CardBody, 
  StatusIndicator, 
  Status
} from './../styled';

import { getDateString } from '../../../../../utils/versionUtils';

interface Props {
  template: Template;
  templateVersion: string;
}


class VersionCard extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Card key="Recent Releases" style={{width: `100%`}}>
        <CardHeader>
          <VersionCardHeader>
            <CardTitle>Recent Releases</CardTitle>
            <CardManageButton>Manage</CardManageButton>
          </VersionCardHeader>
        </CardHeader>
        <CardBody>
          <VersionCardRow>
            <VersionCardRowTitle style={{flexBasis: `15%`}}>Version</VersionCardRowTitle>
            <VersionCardRowTitle style={{flexBasis: `25%`}}>Updated</VersionCardRowTitle>
            <VersionCardRowTitle style={{flexBasis: `20%`}}>Status</VersionCardRowTitle>
          </VersionCardRow>  
          {this.props.template.instances && this.props.template.instances.map((instance: TemplateInstance) => (
            <VersionCardRow>
              <VersionWrapper>
                {instance.version}
                {instance.version === this.props.templateVersion && <VersionIcon iconName={'View'}/>}
              </VersionWrapper>      
              <DateWrapper>{instance.updatedAt? getDateString(instance.updatedAt) : "N/A"}</DateWrapper>
              <StatusWrapper>
                <StatusIndicator state={instance.state}/>
                <Status>{instance.state && instance.state.toString().charAt(0).toUpperCase() + instance.state.toString().slice(1)}</Status>
              </StatusWrapper>
            </VersionCardRow>
          ))}       
        </CardBody>
      </Card>
    );
  }
}

export default VersionCard;