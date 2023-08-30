import { PermissionDefinition } from '@vendure/core';

export const readPerformer = new PermissionDefinition({
    name: 'ReadPerformer',
    description: 'Allows rading performers via Admin API and Shop API',
});

export const createPerformer = new PermissionDefinition({
    name: 'CreatePerformer',
    description: 'Allows creating performers via Admin API',
});

export const updatePerformer = new PermissionDefinition({
    name: 'UpdatePerformer',
    description: 'Allows updating performers via Admin API and Shop API',
});

export const deletePerformer = new PermissionDefinition({
    name: 'DeletePerformer',
    description: 'Allows deleting performers via Admin API',
});
