import { PermissionDefinition } from '@vendure/core';

export const readPerformer = new PermissionDefinition({
    name: 'ReadPerformer',
    description: 'Allows rading performers via Admin API and Shop API',
});
